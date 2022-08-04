<template>
<div>
  <site-navbar></site-navbar>
  <div class="col-12">
    <h2>BioImage-IT</h2>
    <router-link to="/about">Go to about</router-link>
  </div>
  <div class="col-12">
    <h2>Manage and process your data with the graphical interface</h2>
  </div>
  <br>
  <div class="col-12">
    <h2>Manage and process your data with python</h2>
  </div>
</div>
</template>

<script>
import SiteNavbar from './SiteNavbar'

export default {
  name: 'Bioimageit',
  props: {
  },
  methods: {
  },
  components: {
    SiteNavbar
  }
}
</script>

<style scoped>
.navbar-url {
    border: 1px solid #333333;
}
</style>
