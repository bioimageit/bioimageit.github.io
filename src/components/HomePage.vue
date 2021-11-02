<template>
<div class="bi-home-div">
    <site-navbar></site-navbar>
    <div class="bi-space"></div>
    <div class="jumbotron text-center bi-header">
        <h1>BioImageIT</h1>
        <p class="bi-subtitle">FAIR BioImage analysis</p>
        <p>FAIR: Findable, Accessible, interoperable, Reusable </p>
    </div>

    <div class="text-center">
        <div class="col-12 bi-alt-light">
        <h3>Manage and process your data with the graphical interface</h3>
        <img src="~@/assets/icons/gui.png" width="70%">
        <p>
        <router-link :to="'tutorials'"><span class="bi-link">see the tutorials</span></router-link>
        </p>
        </div>
        <div class="col-12 bi-alt-dark">
        <h3>Manage and process your data with python </h3>
        <img src="~@/assets/icons/python_lib.png" width="70%">
        <p>
        <router-link :to="'tutorials'"><span class="bi-link">see the tutorials</span></router-link>
        </p>
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
.bi-home-div {
    background-color: #f7f7f7;
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
    color: #333333;
    margin-top: -14px;
    background-color: #eeeeee;
}


</style>