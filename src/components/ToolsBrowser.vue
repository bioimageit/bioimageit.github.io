<template>
<div class="row tool-list">

<div class="col-md-3">
<tool-item
  v-for="item in tools"
  v-bind:key="item.id"
  v-bind:info="item"
  v-on:showdocs="showdocs($event)"
></tool-item>

</div>
<div class='col-md-9 tool-help'>
<iframe id="inlineFrameTool"
    title="inlineFrameTool"
    width="100%"
    height="100%"
    :src="currentdoc"
    >
</iframe>
</div>  

</div>
</template>

<script>
import ToolItem from './ToolItem'

export default {
  name: 'ToolsBrowser',
  props: {
    tools: {type: Array, required: true}
  },
  data: function() {
    return {
      currentdoc: ''
    }
  },
  methods:{
    showdocs: function(helpurl){
      this.currentdoc = helpurl;
    }
  },
  components: {
    ToolItem
  }
}
</script>

<style scoped>
.tool-list {
  margin-top: 7px;
}
.tool-help{
  height: 2000px;
}
#inlineFrameTool{
  border: 1px solid #e1e1e1;
}
</style>
