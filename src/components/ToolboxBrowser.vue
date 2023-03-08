<template>
    <div>
      <div class="col-12">
        <toolbox-navbar v-bind:category="curentCategory" v-on:home="home"></toolbox-navbar>  
        <div v-if="toolboxmode">
          <toolbox-list
            v-bind:categories="categories" 
            v-on:browse="browse($event)"
          >
        </toolbox-list>
       </div> 
       <div v-else>
        <tools-browser
          v-bind:tools="tools" 
        >
        </tools-browser>  
       </div>
      </div>
    </div>
</template>

<script>
import ToolboxNavbar from './ToolboxNavbar'
import ToolboxList from './ToolboxList'
import ToolsBrowser from './ToolsBrowser'
import toolboxesData from '../assets/toolboxes.json'
import toolsData from '../assets/tools_database.json'

export default {
  name: 'ToolboxBrowser',
  props: {
  },
  data: function(){
      return {
        curentCategory: 'Home',  
        toolboxmode: true,
        categories: this.init(),  
        tools: []
      }
  },
  methods: {
    init: function(){
      for (var i = 0 ; i < toolboxesData.categories.length ; i++){
        var thumb = toolboxesData.categories[i].thumbnail;   
        toolboxesData.categories[i].thumbnail = require( `../assets/${thumb}`);
      }
      return this.query('root');
    },
    home: function(){
        this.browse('root');
    },
    query: function(category){
      var items = [];
      for (var i = 0; i < toolboxesData.categories.length; i++) {
        var tb = toolboxesData.categories[i];
        if (tb.parent == category){
          items.push(tb);    
        }
      } 
      return items;
    },
    queryTools: function(category){
      var items = [];
      //console.log('tools database size:' + toolsData.length);
      const keys = Object.keys(toolsData);
      for (var i = 0 ; i < keys.length ; i++){
        var value = toolsData[keys[i]];
        for (var j = 0 ; j < value.categories.length; j++){
          var cat = value.categories[j];
          if (cat == category){
            items.push(value); 
            break;   
          }    
        }
      }
      return items;
    },
    browse: function(category){
      this.categories = this.query(category);
      if (this.categories.length == 0) {
        this.tools = this.queryTools(category);
        this.toolboxmode = false;
      }
      else{
        this.tools = [];  
        this.toolboxmode = true;
      }
      if (category == 'root'){
        this.curentCategory = 'Home';
      }   
      else{
        this.curentCategory = category;
      }
    }
  },
  components: {
    ToolboxNavbar,  
    ToolboxList,
    ToolsBrowser
  }
}
</script>

<style scoped>
.navbar-url {
    border: 1px solid #333333;
}
</style>