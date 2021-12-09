<template>
<div>
  <site-navbar></site-navbar>
  <div class="container">
 
     <div class="row">
      <div class="col-12 text-center">
        <h1><img src="~@/assets/logo.png" width="70"> <br />BioImageIT Install</h1>
        </div>
    </div>
    
    <h1>MacOS install</h1>

      <p>To install BioImageIT on MacOS, download the script <a href="https://raw.githubusercontent.com/bioimageit/bioimageit-install/main/mac/install.sh" download>install.sh</a>: </p>
      <p>and run the commands from terminal:</p>
      <p><code><br />
        chmod +x install.sh<br />
        ./install.sh <br />
      </code></p>

      <p>When the install is finished, BioImageIT is installed in <i>/Users/username/BioimageIT</i> .</p>

      <p>
      You can then start BioImageIT with the command
      </p>
      <p><code><br />
      ./Users/username/BioImageIT/BioImageIT.sh
      </code></p>

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
