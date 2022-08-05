<template>
<div>
  <site-navbar></site-navbar>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h1><img src="~@/assets/logo.png" width="70"> <br />BioImageIT Install</h1>
        <br>
        <p>What is your operating system ?</p>
        </div>
    </div>

    <div class="row bi-install">
      <div class="col-md-12">
        <div class="bi-spacer">
        </div>
      </div> 
      <div class="col-md-4 text-center"> 
        <a href="#/install-windows">
        <img src="~@/assets/install/windows.png" width="200" height="200" /><br />
        Windows</a><br />
      </div>  

      <div class="col-md-4 text-center"> 
        <a href="#/install-mac">
        <img src="~@/assets/install/apple.png" width="200" height="200" /><br />
        MacOS</a><br />
      </div> 

      <div class="col-md-4 text-center"> 
        <a href="#/install-linux">
        <img src="~@/assets/install/linux.png" width="168" height="200" /><br />
        Linux</a><br />
      </div> 

    </div>
  </div>
  <site-footer></site-footer>
</div>
</template>

<script>
import SiteNavbar from './SiteNavbar'
import SiteFooter from './SiteFooter'

export default {
  name: 'HomePage',
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
.bi-install {
  padding-bottom: 140px;
}
.bi-spacer{
  height: 100px;
}
</style>
