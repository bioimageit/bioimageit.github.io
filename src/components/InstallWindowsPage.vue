<template>
<div>
  <site-navbar></site-navbar>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center ">
        <h1><img src="~@/assets/logo.png" width="70"> <br />BioImageIT Install</h1>
        </div>
    </div>
    <div class="alert alert-warning">
      <p>By downloading, installing, or otherwise using BioImageIT, you accept and agree to be bound by all of the terms and conditions of the following licenses:
        <ul>
      <li>BioImageIT: BSD 4-Clause "Original" or "Old" License.</li>
      <li>BioImageIT_Omero: GNU General Public License v2.0.</li>
        </ul>
      </p>
    </div>
    <div class="bi-install">
      <h1>Windows install</h1>

      <p>Download and execute the installer from <a href="https://github.com/bioimageit/bioimageit-install/raw/v0.1.2/windows/BioImageIT_install.exe" download>here</a></p>
      <p>When the install is finished, BioImageIT is installed in <i>C:\Users\username\BioimageIT\</i> and the BioImageIT 
      application should appear in the start menu</p>
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
