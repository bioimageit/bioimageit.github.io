<template>
    <div>
      <site-navbar></site-navbar>
      <div class="container">
        <div class="col-12">
            <h1>Developers</h1>
        </div>
        <div class="col-12">
            <div class="row justify-content-center">
                <a href="https://bioimageit.github.io/bioimageit_core/tutorial_wrap_a_tool.html" class="bi-tile-link">
                <div class="col-sm bi-tile">
                    <img src="~@/assets/icons/tutorial_icon_white.png" alt="tutorial" width="150px">
                    <p>Write a tool wraper</p>
                </div>
                </a>
                <a href="https://bioimageit.github.io/bioimageit_core/tutorial_write_a_metadata_plugin.html" class="bi-tile-link">
                <div class="col-sm bi-tile">
                    <img src="~@/assets/icons/tutorial_icon_white.png" alt="tutorial" width="150px">
                    <p>Write a metadata plugin</p>
                </div>
                </a>
                <a href="https://bioimageit.github.io/bioimageit_core/tutorial_write_a_runner_plugin.html" class="bi-tile-link">
                <div class="col-sm bi-tile">
                    <img src="~@/assets/icons/tutorial_icon_white.png" alt="tutorial" width="150px">
                    <p>Write a runner plugin</p>
                </div>
                </a>
                The full developer documentation is available <a href="https://bioimageit.github.io/bioimageit_core/index.html">here</a>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import SiteNavbar from './SiteNavbar'

export default {
  name: 'TutorialsPage',
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
.bi-tile {
    cursor: pointer;
    text-align: center;
    background-color: #018181;
}
.bi-tile-link {
    min-width: 300px;
    margin-left: 7px;
    color: #ffffff;
}
</style>