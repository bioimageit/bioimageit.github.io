<template>
<div>
  <site-navbar></site-navbar>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h1><img src="~@/assets/logo.png" width="70"> <br />BioImageIT Install</h1>
        </div>
    </div>
 
      <h1>Windows install</h1>

      <p>Download and execute the installer from <a href="https://github.com/bioimageit/bioimageit-install/raw/main/windows/BioimageIT_installer.exe" download>here</a></p>
      <p>When the install is finished, BioImageIT is installed in <i>C:\Users\username\BioimageIT\</i> and the BioImageIT 
      application should appear in the start menu</p>

    </div>
  </div>
</template>

<script>
import SiteNavbar from './SiteNavbar'

export default {
  name: 'InstallWindowsPage',
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
.bi-spacer{
  height: 150px;
}
</style>
