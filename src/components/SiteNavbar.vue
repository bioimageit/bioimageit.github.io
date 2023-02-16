<template>
<div>
  <b-navbar class="bi-navbar" toggleable="lg">
    <b-navbar-brand href="/"><span class="bi-brand"><img class="img-hover" src="~@/assets/logo.png" width="50px" />BioImageIT</span></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav> 
        <b-nav-item class="nav-item"><router-link class="nav-link bi-nav-item" to="/home">Home</router-link></b-nav-item>
        <b-nav-item class="nav-item"><router-link class="nav-link bi-nav-item" to="/install">Install</router-link></b-nav-item>
        <b-nav-item class="nav-item"><router-link class="nav-link bi-nav-item" to="/documentation">Documentation</router-link></b-nav-item>

        <b-nav-item class="nav-item"><router-link class="nav-link bi-nav-item" to="/videos">Videos</router-link></b-nav-item>
        <b-nav-item class="nav-item"><router-link class="nav-link bi-nav-item" to="/events">Events</router-link></b-nav-item>
        <b-nav-item class="nav-item"><router-link class="nav-link bi-nav-item" to="/community">Community</router-link></b-nav-item>
        <b-nav-item class="nav-item"><router-link class="nav-link bi-nav-item" to="/about">About</router-link></b-nav-item>
        <a class="nav-link bi-nav-item-github" v-bind:href="'https://github.com/bioimageit/bioimageit'" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></a>
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
  display: flex;
  background-color: #dce1e6;
  backdrop-filter: blur(20px);
  position: sticky;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: #d1d6db;
}

.bi-brand {
  color: #0071C3;
  font-weight: bold;
}
.bi-nav-item {
    text-transform: uppercase;
    color: #d1d6db;
}
.bi-nav-item-github {
    margin-top: 5px;
    text-transform: uppercase;
}
.bi-space {
  height: 12px;
}


.bi-brand:hover {
  transform:scale(1.03);
  filter: drop-shadow(1px 1px #227db6);
  transition: all 0.1s ease;
}
.bi-nav-item:hover {
  transform:scale(1.03);
  filter: drop-shadow(1px 1px #227db6);
  transition: all 0.1s ease;
}
.bi-nav-item-github:hover {
  transform:scale(1.03);
  filter: drop-shadow(1px 1px #227db6);
  transition: all 0.1s ease;
}
.img-hover:hover {
    transform:scale(1.03);
    filter: drop-shadow(1px 1px #227db6);
    transition: all 0.1s ease;
}

.bi-link {
  text-decoration: none;
  color: #227db6;
}

.bi-link:hover {
  color: #0071C3;
  filter: drop-shadow(1px 1px #227db6);
  transition: all 0.1s ease;
}
</style>
