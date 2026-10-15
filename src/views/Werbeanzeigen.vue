<template>
  <section id="snippet-9" class="wrapper bg-gray">
    <div class="container pt-10 pt-md-15 pb-13 pb-md-15">
      <div class="row gx-3 gy-10 gy-lg-0 align-items-center">
        <div class="col-lg-5 mx-auto order-lg-2">
          <figure>
            <img
              class="w-auto"
              src="/assets/img/illustrations/3d5.png"
              srcset="/assets/img/illustrations/3d5@2x.png 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-5 me-auto">
          <h2 class="fs-16 text-uppercase text-primary mb-3">Mit uns werben</h2>
          <h3 class="display-4 mb-5 pe-xxl-5">
            Ihr Werbeträger mit hoher Akzeptanz in der Region
          </h3>
          <p class="mb-6">
            Neben klassischen Anzeigen können Sie bei uns auch über Gewinnspiele werben. Gerne stehen wir Ihnen für eine persönliche Beratung zu Verfügung. Anzeigenschluss ist jeweils der 15. des Vormonats.
          </p>
          <!--/.row -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>

  <section class="wrapper bg-gray">
    <div class="container pt-5 pt-md-7 pb-13 pb-md-15">
        <div class="card bg-soft-primary pb-7 pb-md-8 pb-lg-10">
            <div class="card-body p-12">
                <div class="row gx-md-8 gx-xl-12 gy-10">
                    <div class="col-lg-12">
                        <h2 class="display-4 mb-3 pe-lg-10">
                        Interessiert?
                        </h2>
                        <p class="lead pe-lg-12 mb-0">
                        Nehmen Sie jetzt Kontakt mit uns auf! Entweder per Telefon, Email oder Kontaktformular.<br/><a href="#">Hier</a> können Sie sich unsere Medienunterlagen herunterladen.
                        </p>
                    </div>
                </div>
                <!-- /column -->
            </div>
            <!--/.card-body -->

            <Kontaktformular preselection="Werbeanzeigen" />

        </div>
        <!--/.card -->
    </div>
</section>
</template>

<script setup>
import Kontaktformular from '@/components/Kontaktformular.vue';

</script>

<style lang="scss" scoped></style>
