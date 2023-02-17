<template>
<div>
  <site-navbar></site-navbar>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>BioImageIT Install</h1>
        <br>
        <h2>What is your operating system ?</h2>
        <p>Downloaded 134 times</p>
        </div>
    </div>

    <div class="row bi-install">
      <div class="col-md-12">
        <div class="bi-spacer">
        </div>
      </div> 
      <div class="col-md-4 bi-tile img-hover"> 
        <a class="bi-link" href="#/install-windows">
        <img src="~@/assets/install/windows.png" width="200" height="200" /><br />
        Windows</a><br />
      </div>  

      <div class="col-md-4 bi-tile img-hover"> 
        <a class="bi-link" href="#/install-mac">
        <img src="~@/assets/install/apple.png" width="200" height="200" /><br />
        MacOS</a><br />
      </div> 

      <div class="col-md-4 bi-tile img-hover">  
        <a class="bi-link" href="#/install-linux">
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
.bi-tile {
    cursor: pointer;
    text-align: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #343a40;
    box-shadow: 20px 20px 60px #343a40,
              -20px -20px 60px #343a40;
    padding-left: 10px;
    padding-right: 10px;
}

.navbar-url {
    border: 1px solid #333333;
}
.bi-install {
  padding-bottom: 140px;
}
.bi-spacer{
  height: 100px;
}

.img-hover:hover {
    transform:scale(1.03);
    filter: drop-shadow(1px 1px #227db6);
    transition: all 0.1s ease;
}

.bi-link {
  text-decoration: none;
  color: #227db6;
}

.bi-link:hover {
  color: #0071C3;
  filter: drop-shadow(1px 1px #227db6);
  transition: all 0.1s ease;
}
</style>
