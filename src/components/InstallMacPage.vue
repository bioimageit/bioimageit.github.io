<template>
<div>
  <site-navbar></site-navbar>
  <div class="container">
 
     <div class="row">
      <div class="col-12 text-center">
        <h1><img src="~@/assets/logo.png" width="70"> <br />BioImageIT Install</h1>
        </div>
    </div>
    
    <div class="bi-install">
    <h1>MacOS install</h1>

      <p>To install BioImageIT on MacOS, download the installer from <a href="https://github.com/bioimageit/bioimageit-install/raw/v0.0.2/mac/BioImageIT_install.dmg" download>here</a> </p>
      <p>Double click <i>BioImageIT_install.dmg</i> to open it </p>
      <p>Double click <i>BioImageIT_install</i> to start the install </p>
      <p>When the install is finished, BioImageIT is available in the Launchpad</p>
    </div>
    </div>
    <site-footer></site-footer> 
  </div>
</template>

<script>
import SiteNavbar from './SiteNavbar'
import SiteFooter from './SiteFooter'

export default {
  name: 'InstallWindowsPage',
  props: {
  },
  methods: {
  },
  components: {
    SiteNavbar,
    SiteFooter
  }
}
</script>

<style scoped>
.bi-install {
  padding-bottom: 300px;
}
.navbar-url {
    border: 1px solid #333333;
}
.bi-spacer{
  height: 150px;
}
</style>
