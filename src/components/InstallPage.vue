<template>
<div>
  <site-navbar></site-navbar>
  <div class="container">
    <div class="col-12">
      <h1>Install</h1>
    </div>
    <div class="col-12">
      <p>This page describes  the different methods to install the BioImageIT tools suite. If you are a beginner, we recommend using the virtual machine that comes with a ready to use local install. If you plan configuring a local or server instance, the easiest method is to use the last stable version zip package that comes with all the tool suite. If you are a developer that needs a dedicated install, you can manually install just the tools you need.  </p>
      <h2>Demo virtual machine</h2>
      <p>We build a demo virtual machine to ease the install of the BioImageIT tool suite in any workstation.</p>
      <ul>
        <li>Install virtual box on your computer: <a href="https://www.virtualbox.org/">https://www.virtualbox.org/</a></li>
        <li>Download the BioImageIT virtual machine from <a href="https://drive.google.com/file/d/10GrIfszhGbdRbYPoGCKsnLk0P_XgBnz-/view?usp=sharing">here</a></li>
        <li>Import the virtual machine in virtual box: <em>file > import</em> </li>
        <li>Start the virtual machine: Select the BioImageIT virtual machine on the left area and clic the &#8220;Start&#8221; button </li>
        <li>When the virtual machine is started, you can login using the credentials:</li>
      <ul>
        <li>username: BioImageIT</li>
        <li>password: bioimageit2020</li>
      </ul>
        <li>All the BioImageIT tools shortcut are in the desktop. Please follow the <router-link :to="'tutorials'">tutorials</router-link> to get started with BioImageIT </li>
      </ul>
      <h2>Local install script</h2>
      <p>A script is available to install BioImageIT locally. Scripts are avalable <a href="https://github.com/bioimageit/bioimageit-install">here</a></p>
      <p>If you are using Windows, download <b>install.bat</b>, if you are using Linux or MacOSX, download <b>install.bat</b> </p>
      <p>Run the script <i>install</i> in the folder you want ot install BioImageIT<br />
      <code><br />
        chmod u+x install.sh<br />
        ./install.sh<br />
      </code><br />
        you will be asked to type a username used to identify the operator un the generated metadata files</p>
        <p>To start the graphical interface for data management, use:<br />
      <code><br />
        ./data_management.sh<br />
      </code></p>
        <p>To start the graphical interface for data processing, use:<br />
      <code><br />
        ./data_processing.sh<br />
      </code></p>
        <p>To use BioImageIT with Jupyter use:<br />
      <code><br />
        ./jupyter.sh<br />
      </code></p>
      <p>Note that this package install the BioImageIT tools (BioImageIT core and BioImageIT GUI), but not the runner (Docker, Singularity...)<br />
      You need to install your runner separatly </p>
      <h2>Manual install</h2>
      <p>the manual installation is avalable in the BioImageIT library documentation <a href="https://bioimageit.github.io/bioimageit_core/install.html">here</a></p>
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