<template>
  <div class="row text-center">
    <div class="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
      <h2 class="fs-15 text-uppercase text-muted mb-3">Was wir tun</h2>
      <h3 class="display-4 mb-9">
        Unsere Mission
      </h3>
    </div>
    <!-- /column -->
  </div>
  <!-- /.row -->
  <div class="row gx-md-8 gx-xl-12 gy-8 text-center">
    <div class="col-md-4">
      <div
        :class="[
          'icon',
          'btn',
          'btn-block',
          'btn-lg',
          'btn-soft-green',
          'pe-none',
          'mb-5',
        ]"
      >
        <img src="/assets/img/icons/lineal/group-2.svg" class=" icon-svg icon-svg-sm text-primary" alt="photo" />
      </div>
      <h4>Unabhängiger Journalismus von Bürger:innen für Bürger:innen</h4>
      <p class="mb-3">BESCHREIBUNG</p>
    </div>

    <div class="col-md-4">
      <div
        :class="[
          'icon',
          'btn',
          'btn-block',
          'btn-lg',
          'btn-soft-green',
          'pe-none',
          'mb-5',
        ]"
      >
        <img src="/assets/img/icons/lineal/paper.svg" class=" icon-svg icon-svg-sm text-primary" alt="photo" />
      </div>
      <h4>Transparente und gemeinschaftliche Berichterstattung</h4>
      <p class="mb-3">BESCHREIBUNG</p>
    </div>

    <div class="col-md-4">
      <div
        :class="[
          'icon',
          'btn',
          'btn-block',
          'btn-lg',
          'btn-soft-green',
          'pe-none',
          'mb-5',
        ]"
      >
        <img src="/assets/img/icons/lineal/megaphone.svg" class=" icon-svg icon-svg-sm text-primary" alt="photo" />
      </div>
      <h4>Frei zugängliche, verlässliche Informationen für alle Haushalte</h4>
      <p class="mb-3">BESCHREIBUNG</p>
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
import { ref } from "vue";

const fatures = ref([
  {
    id: 1,
    title: "24/7 Support",
    icon: "uil uil-phone-volume",
    color: "purple",
    description:
      "Fusce dapibus tellus cursus porta tortor condimentum euismod massa justo vehicula sit amet et risus cras.",
    link: "#support",
  },
  {
    id: 2,
    title: "Secure Payments",
    icon: "uil uil-shield-exclamation",
    color: "green",
    description:
      "Fusce dapibus tellus cursus porta tortor condimentum euismod massa justo vehicula sit amet et risus cras.",
    link: "#payments",
  },
  {
    id: 3,
    title: "Daily Updates",
    icon: "uil uil-laptop-cloud",
    color: "orange",
    description:
      "Fusce dapibus tellus cursus porta tortor condimentum euismod massa justo vehicula sit amet et risus cras.",
    link: "#updates",
  },
]);
</script>

<style lang="scss" scoped></style>
