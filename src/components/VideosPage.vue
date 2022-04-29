<template>
<div>
  <site-navbar></site-navbar>
  <div class="container">
    <div class="text-center col-12">
      <h2>BioImageIT using OMERO</h2>
       <iframe width="700" height="420"
        src="https://www.youtube.com/embed/cDPn5OF9LRI">
      </iframe> 
    </div>
    <div class="text-center col-12">
      <h2>BioImageIT tool demo (ND-SAFIR)</h2>
       <iframe width="700" height="420"
        src="https://www.youtube.com/embed/87JFlLHzsMU">
      </iframe> 
    </div>
    <div class="text-center col-12">
      <h2>BioImageIT data management demo</h2>
       <iframe width="700" height="420"
        src="https://www.youtube.com/embed/PKXsEZ0fMxk">
      </iframe> 
    </div>
    <div class="text-center col-12">
      <h2>BioImageIT installation Windows</h2>
       <iframe width="700" height="420"
        src="https://www.youtube.com/embed/Z0DP0tMZPEY">
      </iframe> 
    </div>
    <div class="text-center col-12">
      <h2>BioImageIT installation MacOS</h2>
       <iframe width="700" height="420"
        src="https://www.youtube.com/embed/R_dVrSbt1Ic">
      </iframe> 
    </div>
    <div class="text-center col-12">
      <h2>BioImageIT installation Linux</h2>
       <iframe width="700" height="420"
        src="https://www.youtube.com/embed/X3BJIfaIv14">
      </iframe> 
    </div>

  </div>  
  <site-footer></site-footer>
</div>
</template>

<script>
import SiteFooter from './SiteFooter.vue'
import SiteNavbar from './SiteNavbar'

export default {
  name: 'VideosPage',
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
.navbar-url {
    border: 1px solid #333333;
}
</style>
