<template>
<div>
  <site-navbar></site-navbar>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h1><img src="~@/assets/install/linux.png" width="70"> <br />Install BioImageIT on Windows</h1>
        </div>
    </div>
    <div class="alert-warning">
      <p>By downloading, installing, or otherwise using BioImageIT, you accept and agree to be bound by all of the terms and conditions of the following licenses:
        <ul>
      <li>BioImageIT: BSD 4-Clause "Original" or "Old" License.</li>
      <li>BioImageIT_Omero: GNU General Public License v2.0.</li>
        </ul>
      </p>
    </div>
    <div class="bi-install">
      <h1>Windows install</h1>

      <p>Download and execute the installer from <a class="bi-link" href="https://github.com/bioimageit/bioimageit-install/raw/v0.1.2/windows/BioImageIT_install.exe" download>here</a></p>
      <p>When the install is finished, BioImageIT is installed by default in <i>C:\Users\username\BioimageIT\</i> and the BioImageIT 
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
.alert-warning {
	color: #dce1e6;
	margin-left: auto;
	margin-right: auto;
	margin-top: 50px;
	margin-bottom: 50px;
	padding-left: 50px;
	padding-right: 50px;
	padding-top: 20px;
	padding-bottom: 20px;
	background-color: #343a40;
	border-radius: 10px;
	text-align: justify;
	font-weight: bold;
	box-shadow: 20px 20px 60px #343a40,
              -20px -20px 60px #343a40;
}

.bi-install {
  padding-bottom: 300px;
}
.navbar-url {
    border: 1px solid #333333;
}
.bi-spacer{
  height: 150px;
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
