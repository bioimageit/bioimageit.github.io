<template>
  <div>
    <SiteNavbar />
    <div class="container">
      <div class="col-12">
        <h1>BioImageIT Install</h1>
        <br />
        <h2>What is your operating system ?</h2>
        <p>Downloaded 141 times</p>
      </div>
    </div>

    <div class="row-doc bi-install col-12">
      <div class="col-12">
        <div class="bi-spacer"></div>
      </div>
      <div class="bi-tile col-sm">
        <RouterLink to="/install-windows" class="bi-link" href="#/install-windows">
          <img src="~@/assets/install/windows.png" width="200" height="200" /><br />
          Windows
        </RouterLink>
        <br />
      </div>

      <div class="bi-tile col-sm" href="#/install-mac">
        <RouterLink to="/install-mac" class="bi-link" href="#/install-mac">
          <img src="~@/assets/install/apple.png" width="200" height="200" /><br />
          macOS
        </RouterLink>
        <br />
      </div>

      <div class="bi-tile col-sm" href="#/install-linux">
        <RouterLink to="/install-linux" class="bi-link" href="#/install-linux">
          <img src="~@/assets/install/linux.png" width="168" height="200" /><br />
          Linux
        </RouterLink>
        <br />
      </div>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import SiteFooter from '../components/SiteFooter.vue'
import SiteNavbar from '../components/SiteNavbar.vue'

export default {
  name: 'HomePage',
  props: {},
  methods: {},
  components: {
    SiteFooter,
    SiteNavbar,
    RouterLink
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

.bi-install {
  padding-bottom: 140px;
}

.bi-spacer {
  height: 100px;
}

.img-hover:hover {
  transform: scale(1.05);
  filter: drop-shadow(1px 1px #227db6);
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

.row-doc {
  display: flex;
  flex-flow: row wrap;
  vertical-align: top;
  justify-content: space-around;
}
</style>
