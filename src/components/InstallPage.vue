<template>
<div>
  <site-navbar></site-navbar>
  <div class="container">
    <div class="col-12">
      <h1>Install</h1>
    </div>
    <div class="col-12">
      <p>This page describes  the different methods to install the BioImageIT tools suite. If you plan to use it locally on a workstation,
        we recommend using the automatic installer. Otherwise, if you need a specific install with a specific backend, you need to install
        each component manually. 
       
      <h2>Local installer</h2>

      The local installer install BioImageIT in the user home directory. All the BioImageIT dependencies are installed in 
      this local folder and then no administrator privileges are needed

      <h3>Windows</h3>

      <p>Download and execute the installer from <a href="https://github.com/bioimageit/bioimageit-install/raw/main/windows/BioimageIT_installer.exe">here</a></p>
      <p>When the install is finished, BioImageIT is installed in <i>C:\Users\username\BioimageIT_installation_files\</i> and the BioImageIT 
      application should appear in the start menu</p>

      <h3>MacOS</h3>

      <p>To install BioImageIT on MacOS, download the script <a href="https://raw.githubusercontent.com/bioimageit/bioimageit-install/main/mac/install.sh">install.sh</a>: </p>
      <p>and run the commands from terminal:</p>
      <p><code><br />
        chmod +x install.sh<br />
        ./install.sh <br />
      </code></p>

      <p>
      You can then start BioImageIT with the command
      </p>
      <p><code><br />
      ./Users/username/BioimageIT/BioImageIT.sh
      </code></p>

      <h2>Manual install</h2>
      <p>the manual installation is available in the BioImageIT library documentation <a href="https://bioimageit.github.io/bioimageit_core/install.html">here</a></p>
    </div>
  </div>
</div>
</template>

<script>
import SiteNavbar from './SiteNavbar'

export default {
  name: 'HomePage',
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
