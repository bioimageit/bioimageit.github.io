<template>
<div>
  <site-navbar></site-navbar>
  <div class="container">
    <div class="col-12">
      <h1>Presentation</h1>
      <p><a href="https://filesender.renater.fr/?s=download&token=f8c388e6-5077-4c0e-a774-cb8ba682b482">download</a></p>
      <h1>Dataset</h1>
      <p><a href="https://filesender.renater.fr/?s=download&token=34b66da6-5ca5-402e-853c-452cc11e69cc">download</a></p>
    </div>
  </div>  
</div>
</template>

<script>
import SiteNavbar from './SiteNavbar'

export default {
  name: 'MifobioPage',
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
