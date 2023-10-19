<template>
  <div>
    <SiteNavbar />
    <div class="container">
      <div class="text-center col-12">
        <h2>BioImageIT using OMERO</h2>
        <iframe
          class="shadow"
          width="700"
          height="420"
          src="https://www.youtube.com/embed/cDPn5OF9LRI"
        >
        </iframe>
      </div>
      <br />
      <div class="text-center col-12">
        <h2>BioImageIT tool demo (ND-SAFIR)</h2>
        <iframe
          class="shadow"
          width="700"
          height="420"
          src="https://www.youtube.com/embed/87JFlLHzsMU"
        >
        </iframe>
      </div>
      <br />
      <div class="text-center col-12">
        <h2>BioImageIT data management demo</h2>
        <iframe
          class="shadow"
          width="700"
          height="420"
          src="https://www.youtube.com/embed/PKXsEZ0fMxk"
        >
        </iframe>
      </div>
      <br />
      <div class="text-center col-12">
        <h2>Big data upload and real time visualization with OMERO</h2>
        <iframe
          class="shadow"
          width="700"
          height="420"
          src="https://www.youtube.com/embed/ywcojZ2YRTs"
        >
        </iframe>
      </div>
      <br />
      <div class="text-center col-12">
        <h2>BioImageIT installation Windows</h2>
        <iframe
          class="shadow"
          width="700"
          height="420"
          src="https://www.youtube.com/embed/Z0DP0tMZPEY"
        >
        </iframe>
      </div>
      <br />
      <div class="text-center col-12">
        <h2>BioImageIT installation MacOS</h2>
        <iframe
          class="shadow"
          width="700"
          height="420"
          src="https://www.youtube.com/embed/R_dVrSbt1Ic"
        >
        </iframe>
      </div>
      <br />
      <div class="text-center col-12">
        <h2>BioImageIT installation Linux</h2>
        <iframe
          class="shadow"
          width="700"
          height="420"
          src="https://www.youtube.com/embed/X3BJIfaIv14"
        >
        </iframe>
      </div>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteNavbar from '../components/SiteNavbar.vue'
import SiteFooter from '../components/SiteFooter.vue'

export default {
  name: 'VideosPage',
  props: {},
  methods: {},
  components: {
    SiteNavbar,
    SiteFooter
  }
}
</script>

<style scoped>
.shadow {
  box-shadow:
    20px 20px 60px #343a40,
    -20px -20px 60px #343a40;
}

.navbar-url {
  border: 1px solid #333333;
}
</style>
