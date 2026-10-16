<template>
  <section class="wrapper bg-gray hero-section mt-n5">
    <div class="container pt-12 pt-md-16 text-center hero-content">
      <div class="row justify-content-center">
        <div
          class="col-lg-8 col-xxl-7 mx-auto text-center"
          data-aos="fade"
          data-aos-once="true"
          data-aos-delay=""
        >
          <img src="/assets/img/eschweger/head/eschweger_kommt.png" alt="Eschweger kommt" class="img-fluid d-block mx-auto mb-5 hero-logo">
          <!-- <h1 class="display-1 fs-58 mb-7 headline">
            {{ meta.title }} kommt!
          </h1> -->
          <div class="alert alert-primary" role="alert">
            <b>Nächste offene Redaktionssitzung</b><br/>
            Am 27.Oktober 2026, 19:30 Uhr<br/>
            Bei Radio RFM, Mangelgasse 19, 37269 Eschwege
          </div>
          <div
            class="d-flex justify-content-center mb-5 mb-md-0"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="300"
          >
            <!-- <span
              ><router-link
                to="/contact"
                class="btn btn-lg btn-outline-primary rounded-pill"
                >KONTAKT</router-link
              ></span
            > -->
          </div>
        </div>
        <!--/column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
    <figure class="position-absolute hero-bg-image">
      <img src="/assets/img/eschweger/head/hero.jpeg?url" alt="photo" />
    </figure>
  </section>
</template>

<script setup>
import { useMetaStore } from '@/stores/metadata';

const meta = useMetaStore()
</script>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  overflow: hidden;
  padding-bottom: 20rem;
}

.hero-logo {
  max-width: 100%;
  width: 700px;
  height: auto;
  filter: brightness(0) invert(1);
}

.hero-content {
  position: relative;
  z-index: 3;
}

.hero-bg-image {
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 60vh;
  z-index: 1;
}

.hero-bg-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: brightness(0.6);
}

@media (max-width: 991px) {
  .hero-section {
    padding-bottom: 8rem;
  }

  .hero-bg-image {
    height: 40vh;
  }
}
</style>
