<template>
<div>
  <site-navbar></site-navbar>
  <div class="container bi-padding">
    <div class="row-doc">
    
    <div class="text-center">
      <h1>Nature Methods Publication</h1>
      <p class="text-center">
      <a class="bi-link" href="https://www.nature.com/articles/s41592-022-01642-9"><img class="img-hover" src="~@/assets/events/nature_methods.png" width="200" height="270" /></a>
      </p> 
    </div>

    <div class="text-center">
      <h1>BioImage Informatics 2021</h1>
      <p class="text-center">
      <a class="bi-link" href="https://raw.githubusercontent.com/bioimageit/bioimageit.github.io/master/src/assets/events/poster_bii.png"><img class="img-hover" src="~@/assets/events/poster_bii.png" width="200" height="270" /></a>
      </p>
    </div> 
    
    <div class="text-center">
      <h1>MiFoBio 2021</h1>
      <p class="text-center">
      <a class="bi-link" href="https://github.com/bioimageit/presentations/raw/main/2021-11-05-bioimageit_mifobio.pdf"><img class="img-hover" src="~@/assets/events/mifobio2021.jpg" width="200" height="270" /></a> 
      </p> 
      </div>
    </div>
    
    <div class="text-center">
      <h1>RTMFM webinar 2022</h1>
      <p class="text-center">
      <iframe class="bi-link" width="500" height="270"
        src="https://www.youtube.com/embed/5zZShltNfkI">
      </iframe> 
      </p>    
    </div>
  </div>  
  <site-footer></site-footer>
</div>
</template>

<script>
import SiteFooter from './SiteFooter.vue'
import SiteNavbar from './SiteNavbar'

export default {
  name: 'EventsPage',
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
.bi-padding{
  padding-bottom: 300px;
}

.img-hover:hover {
  transform:scale(1.05);
  box-shadow: 20px 20px 60px #343a40, -20px -20px 60px #343a40;
  transition: all 0.2s ease;
}


.bi-link {
  text-decoration: none;
  color: #227db6;
}

.bi-link:hover {
  color: #0071C3;
  transition: all 0.1s ease;
}

.row-doc {
  display: flex;
  flex-flow: row wrap;
  vertical-align: top;  
  justify-content: space-around;
}
</style>
