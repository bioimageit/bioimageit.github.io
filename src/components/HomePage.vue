<template>
<div class="bi-home-div">
    <site-navbar></site-navbar>
    <div class="bi-space"></div>
    <div class="jumbotron text-center bi-header">
        
        <h1 id="bi-logo"><img src="~@/assets/logo.png" width="150px" /> BioImageIT</h1>
        <p class="bi-subtitle">FAIR BioImage analysis</p>
        <p>FAIR: Findable, Accessible, interoperable, Reusable </p>
    </div>

    <div class="text-center">
        <div class="col-12 bi-alt-light">
        <h3>Manage and process data with a simple interface</h3>
        <img src="~@/assets/icons/gui.png" width="70%">
        <p>
        </p>
        </div>
        <div class="col-12 bi-alt-light">
        <h3>Manage and process data with a simple python API </h3>
        <img src="~@/assets/icons/python_lib.png" width="70%">
        </div>
        <div class="col-12 bi-spacer">
        </div>
    </div>

    <div class="text-center bi-founding"> 
        <h3>BioImageIT is funded by</h3>
        <p><a href="https://france-bioimaging.org/"><img src="~@/assets/icons/france-bioimaging_inv.png" alt="" width="300" height="87"/></a></p>
      
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
.bi-home-div {
    background-color: #414851;
}
.bi-link {
    color: #0071C3;
}
.bi-space {
    margin-top: -12px;
}
.bi-subtitle {
    font-size: 20px;
}
.bi-header {
    color: #ffffff;
    background-color: #414851;
    border-radius: 0px;
}
.bi-alt-light {
    margin-top: -35px;
    background-color: #414851;
}
.bi-alt-dark {
    margin-top: -35px;
    color: #333333;
    background-color: #414851;
}
.bi-spacer {
    height: 100px;
    background-color: #414851;
}

.bi-founding {
    color: #f0f1f2;
    margin-top: 0px;
    background-color: #414851;
}
#bi-logo{
    color: #0071C3;
}

</style>