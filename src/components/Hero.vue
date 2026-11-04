<template>
  <section class="wrapper bg-gray hero-section mt-n5">
    <div class="hero-banner">
      <figure class="hero-bg-image">
        <img src="/assets/img/eschweger/head/hero.jpeg?url" alt="photo" />
      </figure>
      <div
        class="container text-center hero-content"
        data-aos="fade"
        data-aos-once="true"
      >
        <img
          src="/assets/img/eschweger/head/eschweger_kommt.png"
          alt="Eschweger kommt"
          class="img-fluid d-block mx-auto hero-logo"
        />
      </div>
    </div>
    <div v-if="aktuelles !== ''" class="container hero-alert">
      <div class="alert alert-primary" role="alert">
        <b>Aktuelles</b><br />
        {{ aktuelles }}
      </div>
    </div>
  </section>
</template>

<script setup>
import { getAktuelles } from '@/services/AktuellesService';
import { useMetaStore } from '@/stores/metadata';
import { onMounted, ref } from 'vue';

const meta = useMetaStore()
const aktuelles = ref("")

onMounted(async () => {
  const res = await getAktuelles()
  if (res.text) {
    aktuelles.value = res.text
  }
})
</script>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  overflow: hidden;
  padding-top: 0;
  padding-bottom: clamp(8rem, 18vh, 20rem);
}

.hero-banner {
  position: relative;
  display: grid;
  place-items: center;
  height: 32rem;
}

.hero-logo {
  width: min(700px, 100%);
  height: auto;
  filter: brightness(0) invert(1);
}

.hero-content {
  z-index: 2;
}

.hero-bg-image {
  position: absolute;
  inset: 0;
  margin: 0;
  z-index: 1;
}

.hero-bg-image img {
  width: 100%;
  height: 100% !important;
  object-fit: cover;
  display: block;
  filter: brightness(0.6);
}

.hero-alert {
  margin-top: 1.5rem;
}

.hero-alert .alert {
  margin-bottom: 0;
  color: #133168;
}

@media (max-width: 767.98px) {
  .hero-section {
    padding-bottom: 8rem;
  }

  .hero-banner {
    height: 24rem;
  }

  .hero-alert {
    margin-top: 1rem;
  }
}
</style>
