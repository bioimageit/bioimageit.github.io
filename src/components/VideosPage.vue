<template>
<div>
  <site-navbar></site-navbar>
  <div class="container">
    <div class="text-center col-12">
      <h2>BioimageIT installation Windows</h2>
       <iframe width="700" height="420"
        src="https://www.youtube.com/embed/917InvFkivA">
      </iframe> 
    </div>
    <div class="text-center col-12">
      <h2>BioimageIT installation MacOS</h2>
       <iframe width="700" height="420"
        src="https://www.youtube.com/embed/pMD_pjPF3Y4">
      </iframe> 
    </div>
    <div class="text-center col-12">
      <h2>BioimageIT installation Linux</h2>
       <iframe width="700" height="420"
        src="https://www.youtube.com/embed/ohKKkMb54k4">
      </iframe> 
    </div>
    <div class="text-center col-12">
      <h2>BioImpageIT tool demo</h2>
       <iframe width="700" height="420"
        src="https://www.youtube.com/embed/cpN4dzASNu0">
      </iframe> 
    </div>
    <div class="text-center col-12">
      <h2>BioImpageIT data management demo</h2>
       <iframe width="700" height="420"
        src="https://www.youtube.com/embed/Ce0hLhO3Qis">
      </iframe> 
    </div>

  </div>  
</div>
</template>

<script>
import SiteNavbar from './SiteNavbar'

export default {
  name: 'VideosPage',
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
