<template>
<div class="tool-item-div">
  <a v-on:click.stop.prevent="showdocs(info.help)">
      {{info.name}} v{{info.version}}     
  </a>
</div>
</template>

<script>
export default {
  name: 'ToolItem',
  props: {
    info : {type: Object, required: true}
  },
  data: function(){
      return {
      }
  },
  methods: {
    showdocs: function(helpurl){
      this.$emit("showdocs", helpurl);
    }
  }
}
</script>

<style scoped>
.tool-item-div{
  margin: 2px;
  height: 35px;
  padding: 5px;
  text-align: left;
  border-radius: 7px;
  border: 1px solid #e1e1e1;
  background-color: #ffffff;
  
}
.tool-item-div:hover{
  cursor: pointer;
  color: #ffffff;
  background-color: #018181;
}
</style>