<template>
  <div class="bi-footer">
    <div class="row">
      <div class="col-12">
        <div class="text-center bi-founding bi-footer">
          <h3>BioImageIT is funded by</h3>
          <p>
            <a target="_blank" href="https://france-bioimaging.org/"
              ><img
                class="img-hover"
                src="~@/assets/icons/france-bioimaging_inv.png"
                alt=""
                width="300"
                height="87"
            /></a>
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center footer-text">
        <h3>Contact us</h3>
        <a target="_blank" href="mailto:bioimageit@gmail.com"
          ><img class="img-hover" src="~@/assets/icons/email.png" width="50"
        /></a>
        <a target="_blank" href="https://twitter.com/BioimageIT"
          ><img class="img-hover" src="~@/assets/icons/twitter.png" width="50"
        /></a>
        <a target="_blank" href="https://www.youtube.com/channel/UCuIsaLnlkZHYqOeXl7en1Qw"
          ><img class="img-hover" src="~@/assets/icons/youtube.png" width="50" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteFooter',
  props: {},
  methods: {}
}
</script>

<style scoped>
.bi-footer {
  background-color: #5a626c;
  padding-bottom: 50px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.bi-founding {
  color: #d1d6db;
  margin-top: 20px;
  background-color: #5a626c;
}
.bi-space {
  height: 12px;
}
.footer-text {
  color: #d1d6db;
}

.img-hover:hover {
  transform: scale(1.03);
  filter: drop-shadow(1px 1px #227db6);
  transition: all 0.1s ease;
}
</style>
