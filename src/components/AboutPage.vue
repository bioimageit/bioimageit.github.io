<template>
<div>
  <site-navbar></site-navbar>
  <div class="container">
    <div class="col-12">
      <h1>About</h1>
    </div>
    <div class="col-12">
      <h2>The BioImageIT project</h2>
      <p>BioImageIT is a France-BioImaging project. It aims at providing good IT practices, recipies and tools for imaging facilities to deploy interoperable image processing and data analysis solutions.</p>
      <p>BioImageIT is also a set of tools to facilitate the installation of image management and analysis facility</p>
      <p><a href="https://france-bioimaging.org/"><img src="~@/assets/icons/france-bioimaging.png" alt="" width="300" height="87"></a>
      
      <h2>Team</h2>
      <ul>
        Sylvain Prigent: BioImageIT project manager &#8211; Inria<br />
        <a href="https://team.inria.fr/serpico/team-members/charles-kervrann-2/">Charles Kervrann</a>: Head of Serpico research team &#8211; Inria<br />
        <a href="https://science.curie.fr/members/salamero-jean-phd/">Jean Salamero</a>: Head of STED research team &#8211; CNRS/Curie
      </ul>
    </div>
  </div>  
</div>
</template>

<script>
import SiteNavbar from './SiteNavbar'

export default {
  name: 'AboutPage',
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

</style>