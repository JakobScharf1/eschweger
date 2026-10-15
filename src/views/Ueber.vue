<template>
  <section class="wrapper bg-gray">
    <div class="container pt-10 pt-md-14 text-center">
      <div class="row">
        <div class="col-xl-6 mx-auto">
          <h1 class="display-1 mb-4">Über uns</h1>
          <p class="lead fs-lg mb-0">
            Wer sind wir und wieso?
          </p>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
    <figure class="position-absoute" style="bottom: 0; left: 0; z-index: 2">
      <img src="/assets/img/photos/bg12.jpg" alt="photo" />
    </figure>
  </section>

  <section class="wrapper bg-gray">
    <div class="container pt-5 pt-md-7 pb-14 pb-md-16 pb-lg-18">
        <div class="row gx-md-8 gx-xl-12 gy-6 mt-8">
            <div class="col-12 text-center">
                <p class="text-muted">
                    Diese Zeitung erscheint derzeit in der BrombeerLand gUG. Dabei handelt es sich um eine gemeinnützige Unternehmergesellschaft (haftungsbeschränkt).
                </p>
            </div>
        <div class="col-lg-4">
        <img src="/assets/img/icons/lineal/home.svg" class=" icon-svg icon-svg-sm text-primary" alt="photo" />
          <h3 class="mt-3">Unsere Geschichte</h3>
          <p>
            Etiam porta sem malesuada magna mollis euismod. Praesent commodo
            cursus magna vel consectetur purus sit amet fermentum.
          </p>
          <ul class="progress-list">
            <li
              v-for="skill in skills3"
              :key="skill.id"
              :class="{ 'mb-0': skill.id === skills3[skills3.length - 1].id }"
            >
              <p>{{ skill.name }}</p>
              <div class="progressbar line soft-primary">
                <CommonLineProgressbar :max="skill.value" />
                <!-- Component for line progressbar with animation from omponents>common>LineProgressbar -->
              </div>
            </li>
          </ul>
          <!-- /.progress-list -->
        </div>
        <!-- /column -->
        <div class="col-lg-4">
            <img src="/assets/img/icons/lineal/balance.svg" class=" icon-svg icon-svg-sm text-primary" alt="photo" />
          <h3 class="mt-3">Unsere Philosophie</h3>
          <p>
            Vestibulum id ligula porta felis euismod semper. Cras mattis
            consectetur purus sit amet fermentum. Donec ullamcorper nulla non
            metus auctor fringilla. Nullam id dolor id nibh ultricies. Cras
            mattis consectetur purus amet fermentum.
          </p>
          <ul class="icon-list bullet-bg bullet-soft-primary mb-0">
            <li v-for="(item, index) in checklistItems" :key="index">
              <i class="uil uil-check"></i>{{ item.text }}
            </li>
          </ul>
        </div>
        <!-- /column -->
        <div class="col-lg-4">
            <img src="/assets/img/icons/lineal/check-list.svg" class=" icon-svg icon-svg-sm text-primary" alt="photo" />
          <h3 class="mt-3">Was wir noch vorhaben</h3>
          <p>
            Vestibulum id ligula porta felis euismod semper. Cras mattis
            consectetur purus sit amet fermentum. Donec ullamcorper nulla non
            metus auctor fringilla. Nullam id dolor id nibh ultricies. Cras
            mattis consectetur purus amet fermentum.
          </p>
          <ul class="icon-list bullet-bg bullet-soft-primary mb-0">
            <li v-for="(item, index) in checklistItems" :key="index">
              <i class="uil uil-check"></i>{{ item.text }}
            </li>
          </ul>
        </div>
        <!-- /column -->
      </div>
    </div>
  </section>

  <section class="wrapper bg-light angled upper-end lower-end">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-6 position-relative order-lg-2">
          <div
            class="shape bg-dot primary rellax w-16 h-20"
            data-rellax-speed="1"
            style="top: 3rem; left: 5.5rem"
          ></div>
          <div class="overlap-grid overlap-grid-2">
            <div class="item">
              <figure class="rounded shadow">
                <img
                  src="/assets/img/photos/about2.jpg"
                  srcset="/assets/img/photos/about2@2x.jpg 2x"
                  alt="image"
                />
              </figure>
            </div>
            <div class="item">
              <figure class="rounded shadow">
                <img
                  src="/assets/img/photos/about3.jpg"
                  srcset="/assets/img/photos/about3@2x.jpg 2x"
                  alt="image"
                />
              </figure>
            </div>
          </div>
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <img
            src="/assets/img/icons/lineal/megaphone.svg"
            class="icon-svg icon-svg-md mb-4"
            alt="photo"
          />
          <h2 class="display-4 mb-3">Das sind wir</h2>
          <p class="mb-6">
            Jeder ist herzlich eingeladen, bei unserer Zeitung mitzumachen: Senden Sie uns Ihre Ideen, Fotos, Rezepte, Artikel oder Veranstaltungstermine. Unterstützen Sie uns bei der Verteilung der Hefte, beim Verkauf der Anzeigen und Gewinnspiele, bei der Erstellung des Layouts, dem Korrekturlesen der Texte, der Besetzung des Ladens, der Abrechnung und Buchhaltung, Abo- und Mitgliederbetreuung sowie der Pflege des Veranstaltungskalenders.<br/>Es gibt viel zu tun, packen wir's an!
          </p>
          <!--/.row -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>

  <section class="wrapper bg-gray">
    <div class="container pt-12 pt-md-13 pb-13 pb-md-15">
      <div class="row mb-3">
        <div class="col-md-10 col-xl-9 col-xxl-7 mx-auto text-center">
          <img
            src="/assets/img/icons/lineal/team.svg"
            class="icon-svg icon-svg-md mb-4"
            alt="photo"
          />
          <h2 class="display-4 mb-3 px-lg-14">
            Unser Team
          </h2>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="position-relative">
        <div
          class="shape rounded-circle bg-soft-yellow rellax w-16 h-16"
          data-rellax-speed="1"
          style="bottom: 0.5rem; right: -1.7rem"
        ></div>
        <div
          class="shape rounded-circle bg-line red rellax w-16 h-16"
          data-rellax-speed="1"
          style="top: 0.5rem; left: -1.7rem"
        ></div>
        <div class="swiper-container dots-closer mb-6">
          <Swiper
            :space-between="5"
            :pagination="{ el: '.spb1', clickable: true }"
            :modules="[Pagination]"
            :grab-cursor="true"
            :breakpoints="{
              500: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
            }"
          >
            <SwiperSlide v-for="(item, i) in teamMembers" :key="i">
              <div class="item-inner">
                <div class="card">
                  <div class="card-body">
                    <img
                      class="rounded-circle w-15 mb-4"
                      :src="item.avatarSrc"
                      alt="photo"
                    />
                    <h4 class="mb-1">{{ item.name }}</h4>
                    <div class="meta mb-2">{{ item.position }}</div>
                    <p class="mb-2">{{ item.description }}</p>
                  </div>
                </div></div
            ></SwiperSlide>
          </Swiper>
          <div class="swiper-controls">
            <div
              class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb1"
            ></div>
          </div>

          <!-- /.swiper -->
        </div>
        <!-- /.swiper-container -->
      </div>
      <!-- /.position-relative -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import { ref } from 'vue';

const teamMembers = ref([
    {
        avatarSrc: "",
        name: "Max Mustermann",
        position: "Chef",
        description: "Nescjreonimg"
    },
    {
        avatarSrc: "",
        name: "Max Mustermann",
        position: "Chef",
        description: "Nescjreonimg"
    },
    {
        avatarSrc: "",
        name: "Max Mustermann",
        position: "Chef",
        description: "Nescjreonimg"
    },
])
</script>

<style lang="scss" scoped></style>
