<template>
  <div>
    <site-navbar></site-navbar>
    <div class="container">
    <div class="col-12">
      <h1>What's inside ?</h1>
    </div>
    <div class="col-12 bi-space">
    </div>
    <div class="col-12">
        <toolbox-browser></toolbox-browser>       
    </div>
    </div>
  </div>
</template>

<script>
import SiteNavbar from './SiteNavbar'
import ToolboxBrowser from './ToolboxBrowser'

export default {
  name: 'ToolsPage',
  props: {
  },
  methods: {
  },
  components: {
    SiteNavbar,
    ToolboxBrowser
  }
}
</script>

<style scoped>
.bi-space {
  height: 12px;
}
</style>      