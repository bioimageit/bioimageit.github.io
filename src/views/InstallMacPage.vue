<template>
  <div>
    <SiteNavbar />
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1>
            <img src="~@/assets/install/apple.png" width="70" /> <br />Install BioImageIT on macOS
          </h1>
        </div>
      </div>
      <div class="alert-warning">
        <p>
          By downloading, installing, or otherwise using BioImageIT, you accept and agree to be
          bound by all of the terms and conditions of the following licenses:
        </p>
        <ul>
          <li>BioImageIT: BSD 4-Clause "Original" or "Old" License.</li>
          <li>BioImageIT_Omero: GNU General Public License v2.0.</li>
        </ul>
      </div>
      <div class="bi-install">
        <h1>MacOS install</h1>

        <p>
          To install BioImageIT on MacOS (COMPATIBLE WITH INTEL MACS, WE WOULD APPRECIATE SOME
          FEEDBACK IF YOU HAVE A M1 MAC), download the installer from
          <a
            class="bi-link"
            href="https://github.com/bioimageit/bioimageit-install/raw/v0.2.0/mac/BioImageIT_install.dmg"
            download
            >here</a
          >,
        </p>
        <p>Double click <i>BioImageIT_install.dmg</i> to open it,</p>
        <p>
          Double click <i>BioImageIT_install</i> to start the install (it will be installed by
          default in <i>username/BioImageIT</i>),
        </p>
        <p>When the install is finished, BioImageIT is available in the Launchpad.</p>
      </div>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteNavbar from '../components/SiteNavbar.vue'
import SiteFooter from '../components/SiteFooter.vue'

export default {
  name: 'InstallWindowsPage',
  props: {},
  methods: {},
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
  box-shadow:
    20px 20px 60px #343a40,
    -20px -20px 60px #343a40;
}

.bi-install {
  padding-bottom: 300px;
}

.navbar-url {
  border: 1px solid #333333;
}

.bi-spacer {
  height: 150px;
}

.img-hover:hover {
  transform: scale(1.03);
  filter: drop-shadow(1px 1px #227db6);
  transition: all 0.1s ease;
}

.bi-link {
  text-decoration: none;
  color: #227db6;
}

.bi-link:hover {
  color: #0071c3;
  filter: drop-shadow(1px 1px #227db6);
  transition: all 0.1s ease;
}
</style>
