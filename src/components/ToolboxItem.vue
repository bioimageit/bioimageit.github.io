<template>
<div class="col-md-3 toolbox-item-box">
  <a v-on:click.stop.prevent="browse(info.id)">
    <div class="row">
      <div class="col-sm-12 text-center">
        <img v-bind:src="info.thumbnail" height="70%" />
      </div>
      <div class="col-sm-12 text-center">  
        <p class="toolbox-item-txt">{{info.name}}</p>
      </div>  
    </div>
  </a>
</div>
</template>

<script>
export default {
  name: 'ToolboxItem',
  props: {
    info : {type: Object, required: true}
  },
  data: function(){
      return {
      }
  },
  methods: {
    browse: function(id){
      this.$emit("browse", id);
    }
  }
}
</script>

<style scoped>
.toolbox-item-box {
  background-color: #018181;
  border: 7px solid #ffffff;
  padding: 5px;
  height: 250px;
}
.toolbox-item-box:hover{
  border: 9px solid #ffffff;
  cursor: pointer;
}
.toolbox-item-txt{
  color: #ffffff;
}
</style>