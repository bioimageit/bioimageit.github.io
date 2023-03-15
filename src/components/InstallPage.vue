<template>
<div>
  <site-navbar></site-navbar>
  <div class="container">
      <div class="col-12">
        <h1>BioImageIT Install</h1>
        <br>
        <h2>What is your operating system ?</h2>
        <p>Downloaded 141 times</p>
        </div>
    </div>

    <div class="bi-install col-12">
      <div class="col-12">
        <div class="bi-spacer">
        </div>
      </div> 
      <div class="col-sm">
        <a class="bi-link" href="#/install-windows">
        <img src="~@/assets/install/windows.png" width="200" height="200" /><br />
        Windows</a><br />
      </div>  

      <div class="col-sm" href="#/install-mac"> 
        <a class="bi-link" href="#/install-mac">
        <img src="~@/assets/install/apple.png" width="200" height="200" /><br />
        macOS</a><br />
      </div> 

      <div class="col-sm" href="#/install-linux">  
        <a class="bi-link" href="#/install-linux">
        <img src="~@/assets/install/linux.png" width="168" height="200" /><br />
        Linux</a><br />
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

.img-hover:hover {
    transform:scale(1.05);
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

.row-doc {
  display: flex;
  flex-flow: row wrap;
  vertical-align: top;  
  justify-content: space-around;
}
</style>
