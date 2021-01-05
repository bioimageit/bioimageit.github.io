<template>
<div class="row toolbox-list">

<ToolboxItem
  v-for="item in categories"
  v-bind:key="item.id"
  v-bind:info="item"
  v-on:browse="browse($event)"
></ToolboxItem>

</div>
</template>

<script>
import ToolboxItem from './ToolboxItem'

export default {
  name: 'ToolboxList',
  props: {
    categories: {type: Array, required: true}
  },
  data: function() {
    return {
      
    }
  },
  methods: {
    browse: function(event){
      this.$emit('browse', event);
    }  
  },
  components: {
    ToolboxItem
  }
}
</script>

<style scoped>
.toolbox-list {
  margin: 7px;
}
</style>