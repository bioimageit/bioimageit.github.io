<template>
<div>
  <site-navbar></site-navbar>
  <div class="container bi-padding">
    <div class="row">
    <div class="col-md-6 text-center">
      <h1>Nature Methods Publication</h1>

      <p class="text-center">
      <a href="https://www.nature.com/articles/s41592-022-01642-9"><img class="img-hover" src="~@/assets/events/nature_methods.png" width="50%" height="50%" /></a>
      </p>
      <p class="text-center">
        The article is available <a href="https://www.nature.com/articles/s41592-022-01642-9">here</a>
      </p> 

    </div>

    <div class="col-md-6 text-center">
      <h1>BioImage Informatics 2021</h1>

      <p class="text-center">
      <img src="~@/assets/events/poster_bii.png" width="50%" height="50%" />
      </p>

    </div> 
    <div class="col-md-6 text-center">
      <h1>MiFoBio 2021</h1>

      <p class="text-center">
      <a href="https://github.com/bioimageit/presentations/raw/main/2021-11-05-bioimageit_mifobio.pdf"><img class="img-hover" src="~@/assets/events/mifobio2021.jpg" width="50%" height="50%" /></a> 
      </p>    
      <p class="text-center">
        The presentation is available <a href="https://github.com/bioimageit/presentations/raw/main/2021-11-05-bioimageit_mifobio.pdf">here</a>
      </p>  
      </div>
    </div>
    <div class="col-md-6 text-center">
      <h1>RTMFM webinar 2022</h1>

      <p class="text-center">
      <iframe width="500" height="270"
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
    transform:scale(1.01);
    transition: all 0.5s ease;
}
</style>
