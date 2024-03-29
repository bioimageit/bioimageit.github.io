<template>
  <div>
    <SiteNavbar />
    <div class="container">
      <div class="col-12">
        <h1>Documentation</h1>
      </div>
      <div class="col-12 bi-padding">
        <h2>Use BioImageIT with the graphical interfaces</h2>
        <div class="row justify-content-center">
          <a
            target="_blank"
            href="https://bioimageit.github.io/bioimageit_gui/tutorial_data_management.html"
            class="bi-tile-link"
          >
            <div class="col-sm bi-tile">
              <img
                class="img-hover"
                src="~@/assets/icons/tutorial_icon_white.png"
                alt="tutorial"
                width="150px"
              />
              <p>Data management</p>
            </div>
          </a>
          <a
            target="_blank"
            href="https://bioimageit.github.io/bioimageit_gui/tutorial_data_analysis.html"
            class="bi-tile-link"
          >
            <div class="col-sm bi-tile">
              <img
                class="img-hover"
                src="~@/assets/icons/tutorial_icon_white.png"
                alt="tutorial"
                width="150px"
              />
              <p>Data analysis</p>
            </div>
          </a>
        </div>
      </div>
      <div class="col-12 bi-padding">
        <h2>Use BioImageIT with the python API</h2>
        <div class="row justify-content-center">
          <a
            target="_blank"
            href="https://github.com/bioimageit/bioimageit-notebooks/blob/main/tutorial1-experiment.ipynb"
            class="bi-tile-link"
          >
            <div class="col-sm bi-tile">
              <img
                class="img-hover"
                src="~@/assets/icons/tutorial_icon_white.png"
                alt="tutorial"
                width="150px"
              />
              <p>Create an experiment</p>
            </div>
          </a>
          <a
            target="_blank"
            href="https://github.com/bioimageit/bioimageit-notebooks/blob/main/tutorial2-tool.ipynb"
            class="bi-tile-link"
          >
            <div class="col-sm bi-tile">
              <img
                class="img-hover"
                src="~@/assets/icons/tutorial_icon_white.png"
                alt="tutorial"
                width="150px"
              />
              <p>Run a data processing tool</p>
            </div>
          </a>
          <a
            target="_blank"
            href="https://github.com/bioimageit/bioimageit-notebooks/blob/main/tutorial3-runner.ipynb"
            class="bi-tile-link"
          >
            <div class="col-sm bi-tile">
              <img
                class="img-hover"
                src="~@/assets/icons/tutorial_icon_white.png"
                alt="tutorial"
                width="150px"
              />
              <p>Design a pipeline</p>
            </div>
          </a>
          <p>
            The python library tutorials are available as Jupyter notebooks
            <a class="bi-link" href="https://github.com/bioimageit/bioimageit-notebooks"> here</a>
          </p>
        </div>
      </div>
      <div class="col-12 bi-padding">
        <h2>Use BioImageIT as a developer</h2>
        <div class="row justify-content-center">
          <a
            target="_blank"
            href="https://bioimageit.github.io/bioimageit_core/tutorial_wrap_a_tool.html"
            class="bi-tile-link"
          >
            <div class="col-sm bi-tile">
              <img
                class="img-hover"
                src="~@/assets/icons/tutorial_icon_white.png"
                alt="tutorial"
                width="150px"
              />
              <p>Write a tool wraper</p>
            </div>
          </a>
          <a
            target="_blank"
            href="https://bioimageit.github.io/bioimageit_core/tutorial_write_a_data_plugin.html"
            class="bi-tile-link"
          >
            <div class="col-sm bi-tile">
              <img
                class="img-hover"
                src="~@/assets/icons/tutorial_icon_white.png"
                alt="tutorial"
                width="150px"
              />
              <p>Write a data plugin</p>
            </div>
          </a>
          <a
            target="_blank"
            href="https://bioimageit.github.io/bioimageit_core/tutorial_write_a_runner_plugin.html"
            class="bi-tile-link"
          >
            <div class="col-sm bi-tile">
              <img
                class="img-hover"
                src="~@/assets/icons/tutorial_icon_white.png"
                alt="tutorial"
                width="150px"
              />
              <p>Write a runner plugin</p>
            </div>
          </a>
          <p>
            The full developer documentation is available
            <a class="bi-link" href="https://bioimageit.github.io/bioimageit_core/index.html">
              here</a
            >
          </p>
        </div>
      </div>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteNavbar from '../components/SiteNavbar.vue'
import SiteFooter from '../components/SiteFooter.vue'

export default {
  name: 'DocumentationPage',
  props: {},
  methods: {},
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
}
.bi-tile:hover {
  transform: scale(1.03);
  box-shadow:
    20px 20px 60px #343a40,
    -20px -20px 60px #343a40;
  transition: all 0.1s ease;
}

.bi-tile-link {
  min-width: 300px;
  margin-left: 7px;
  color: #ffffff;
}
.bi-padding {
  padding-bottom: 100px;
}

.img-hover:hover {
  transform: scale(1.03);
  transition: all 0.1s ease;
}

.bi-link {
  text-decoration: none;
  color: #227db6;
}

.bi-link:hover {
  color: #0071c3;
  filter: drop-shadow(1px 1px #227db6);
  transition: all 0.1s ease;
}
.bi-tile-link:hover {
  color: #0071c3;
  transition: all 0.1s ease;
}
</style>
