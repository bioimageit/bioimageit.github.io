<template>
<div>
  <b-navbar class="bi-navbar" toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#"><span class="bi-brand">BioImageIT</span></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav> 
        <b-nav-item class="nav-item"><router-link class="nav-link bi-nav-item" to="/home">Home</router-link></b-nav-item>
        <!-- <b-nav-item class="nav-item"><router-link class="nav-link bi-nav-item" to="/tools">What's inside</router-link></b-nav-item> -->
        <b-nav-item class="nav-item"><router-link class="nav-link bi-nav-item" to="/install">Install</router-link></b-nav-item>
        <b-nav-item class="nav-item"><router-link class="nav-link bi-nav-item" to="/tutorials">Tutorials</router-link></b-nav-item>
        <b-nav-item class="nav-item"><router-link class="nav-link bi-nav-item" to="/developers">Developers</router-link></b-nav-item>
        <b-nav-item class="nav-item"><router-link class="nav-link bi-nav-item" to="/about">About</router-link></b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
  <div class="bi-space">
  </div>
</div>
</template>

<script>
export default {
  name: 'SiteNavbar',
  props: {
  },
  methods: {
    home: function(){
        this.$emit("home");
    },
    tools: function(){
        this.$emit("tools");
    },
    install: function(){
        this.$emit("install");
    },
    developers: function(){
        this.$emit("developers");
    },
    about: function(){
        this.$emit("about");
    }
  }
}
</script>

<style scoped>
.bi-navbar {
  background-color: #5A626C;
}

.bi-brand {
  color: #0071C3;
  font-weight: bold;
}
.bi-nav-item {
    text-transform: uppercase;
}
.bi-space {
  height: 12px;
}
</style>