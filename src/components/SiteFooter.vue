<template>
<div class="bi-footer">
  <div class="row">
    <div class="col-12">
      <div class="text-center bi-founding bi-footer"> 
        <h3>BioImageIT is funded by</h3>
        <p><a href="https://france-bioimaging.org/"><img class="img-hover" src="~@/assets/icons/france-bioimaging_inv.png" alt="" width="300" height="87"/></a></p>
      </div>  
    </div> 
  </div>
  <div class="row">
    <div class="col-12 text-center">
      <h3>Contact us</h3>
      <a href='mailto:bioimageit@gmail.com'><img class="img-hover" src="~@/assets/icons/email.png" width="50" /></a>
      <a href='https://twitter.com/BioimageIT'><img class="img-hover" src="~@/assets/icons/twitter.png" width="50" /></a>
      <a href='https://www.youtube.com/channel/UCuIsaLnlkZHYqOeXl7en1Qw'><img class="img-hover" src="~@/assets/icons/youtube.png" width="50"/> </a>  
    </div>  

  </div>  
</div>
</template>

<script>
export default {
  name: 'SiteFooter',
  props: {
  },
  methods: {
  }
}
</script>

<style scoped>
.bi-footer {
  background-color: #5A626C;
  padding-bottom: 50px;
}
.bi-founding {
    color: #f0f1f2;
    margin-top: 20px;
    background-color: #5A626C;
}
.bi-space {
  height: 12px;
}

.img-hover:hover {
    transform:scale(1.03);
    filter: drop-shadow(1px 1px #227db6);
    transition: all 0.1s ease;
}
</style>
