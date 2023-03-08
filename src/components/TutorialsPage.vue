<template>
    <div>
      <site-navbar></site-navbar>
      <div class="container">
        <div class="col-12">
            <h1>Tutorials</h1>
        </div>
        <div class="col-12 bi-padding">
            <h2>Using the graphical interface</h2>
            <div class="row justify-content-center">
                <a href="https://bioimageit.github.io/bioimageit_gui/tutorial_experiment.html" class="bi-tile-link">
                <div class="col-sm bi-tile">
                    <img src="~@/assets/icons/tutorial_icon_white.png" alt="tutorial" width="150px">
                    <p>Create an experiment</p>
                </div>
                </a>
                <a href="https://bioimageit.github.io/bioimageit_gui/tutorial_finder.html" class="bi-tile-link">
                <div class="col-sm bi-tile">
                    <img src="~@/assets/icons/tutorial_icon_white.png" alt="tutorial" width="150px">
                    <p>Browse the toolboxes</p>
                </div>
                </a>
                <a href="https://bioimageit.github.io/bioimageit_gui/tutorial_runner.html" class="bi-tile-link">
                <div class="col-sm bi-tile">
                    <img src="~@/assets/icons/tutorial_icon_white.png" alt="tutorial" width="150px">
                    <p>Run a data processing tool</p>
                </div>
                </a>
                <a href="https://bioimageit.github.io/bioimageit_gui/tutorial_pipeline.html" class="bi-tile-link">
                <div class="col-sm bi-tile">
                    <img src="~@/assets/icons/tutorial_icon_white.png" alt="tutorial" width="150px">
                    <p>Design a data processing pipeline</p>
                </div>
                </a>
            </div>
        </div>
        <div class="col-12 bi-padding">
            <h2>Using the python library</h2>
            <div class="row justify-content-center">
                <a href="https://github.com/bioimageit/bioimageit-notebooks/blob/main/tutorial1-experiment.ipynb" class="bi-tile-link">
                <div class="col-sm bi-tile">
                    <img src="~@/assets/icons/tutorial_icon_white.png" alt="tutorial" width="150px">
                    <p>Create an experiment</p>
                </div>
                </a>
                <a href="https://github.com/bioimageit/bioimageit-notebooks/blob/main/tutorial2-runner.ipynb" class="bi-tile-link">
                <div class="col-sm bi-tile">
                    <img src="~@/assets/icons/tutorial_icon_white.png" alt="tutorial" width="150px">
                    <p>Run a data processing tool</p>
                </div>
                </a>
                <a href="https://github.com/bioimageit/bioimageit-notebooks/blob/main/tutorial3-pipeline.ipynb" class="bi-tile-link">
                <div class="col-sm bi-tile">
                    <img src="~@/assets/icons/tutorial_icon_white.png" alt="tutorial" width="150px">
                    <p>Design a pipeline</p>
                </div>
                </a>
                The python library tutorials are available as Jupyter notebooks <a href="https://github.com/bioimageit/bioimageit-notebooks">here</a>
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
  name: 'TutorialsPage',
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
    background-color: #5A626C;
}
.bi-tile-link {
    min-width: 300px;
    margin-left: 7px;
    color: #ffffff;
}
.bi-padding{
    padding-bottom: 100px;
}

.bi-tile:hover {
    transform:scale(1.03);
    filter: drop-shadow(1px 1px #227db6);
    transition: all 0.5s ease;
}
.bi-tile-link:hover {
    transform:scale(1.03);
    filter: drop-shadow(1px 1px #227db6);
    transition: all 0.5s ease;
}
</style>