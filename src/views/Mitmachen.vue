<template>
  <section id="snippet-2" class="wrapper bg-gray wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <h2 class="display-4 mb-3">Bei unseren Projekten mitmachen</h2>
      <p class="lead fs-lg mb-8">
        Als ehrenamtliche:r Helfer:in den <span class="underline">Gemeinnutzen</span> unterstützen.
      </p>
      <div class="row gx-lg-8 gx-xl-12 gy-6 process-wrapper line">
        <div
          class="col-md-6 col-lg-3"
        > 
        <span
          class="icon btn btn-circle btn-lg btn-soft-primary pe-none mb-4"
          >
            <span class="number">1</span>
          </span>
          <h4 class="mb-1">Eintragen</h4>
          <p class="mb-0">Tragen Sie sich über das Formular bei uns als Mitmacher:in ein.</p>
        </div>

        <div
          class="col-md-6 col-lg-3"
        > 
        <span
          class="icon btn btn-circle btn-lg btn-soft-primary pe-none mb-4"
          >
            <span class="number">2</span>
          </span>
          <h4 class="mb-1">Anfrage</h4>
          <p class="mb-0">Wenn wir Unterstützung benötigen, melden wir uns bei Ihnen.</p>
        </div>

        <div
          class="col-md-6 col-lg-3"
        > 
        <span
          class="icon btn btn-circle btn-lg btn-primary pe-none mb-4"
          >
            <span class="number">3</span>
          </span>
          <h4 class="mb-1">Mitmachen</h4>
          <p class="mb-0">Helfen Sie auf Veranstaltungen, Auf- und Abbau oder in organsiatorischen Themen.</p>
        </div>

        <div
          class="col-md-6 col-lg-3"
        > 
        <span
          class="icon btn btn-circle btn-lg btn-soft-primary pe-none mb-4"
          >
            <span class="number">4</span>
          </span>
          <h4 class="mb-1">Abmelden</h4>
          <p class="mb-0">Wenn Sie nicht mehr dabei sein möchten, können Sie uns einfach kontaktieren und wir nehmen Sie aus der Mitmach-Liste raus.</p>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
</section>

<section class="wrapper bg-light wrapper-border">
    <div class="container pb-13 pb-md-15">
        <div class="row pt-10">
            <h2>In die Mitmach-Liste eintragen</h2>
            <MitmachFormular />
        </div>
    </div>
</section>

</template>

<script setup>
import MitmachFormular from '@/components/MitmachFormular.vue';

</script>

<style lang="scss" scoped></style>