<template>
  <div>
    <SiteNavbar />
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1>
            <img src="~@/assets/install/linux.png" width="70" /> <br />Install BioImageIT on Linux
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
        <h1>Linux install</h1>

        <p>To install BioImageIT on Linux, run the following command from terminal:</p>
        <p>
          <code
            ><br />
            cd /home/$USER && wget
            https://raw.githubusercontent.com/bioimageit/bioimageit-install/v0.2.0/linux/install.sh
            && chmod +x install.sh && sh install.sh && rm install.sh<br />
          </code>
        </p>

        <p>
          When the install is finished, BioImageIT is installed in
          <i>/home/username/BioimageIT</i> .
        </p>

        <p>You can then start BioImageIT with the command (it is also available in the App Menu)</p>
        <p>
          <code
            ><br />
            ./home/username/BioImageIT/BioImageIT.sh
          </code>
        </p>
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
