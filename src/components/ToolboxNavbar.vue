<template>
    <div class="row">
        <button v-on:click="home" class="btn col-1"><i class="fa fa-home"></i></button>
        <div class="navbar-url col-11"><span>{{category}}</span></div>
    </div>
</template>

<script>
export default {
  name: 'ToolboxNavbar',
  props: {
      category: {type: String, required: true}
  },
  methods: {
    home: function(){
        this.$emit("home");
    }
  }
}
</script>

<style scoped>
.navbar-url {
  border: 1px solid #e1e1e1;
  border-radius: 7px;
  text-align: left;
  line-height: 24px;
  vertical-align: middle;
  padding-top: 9px;
}
</style>