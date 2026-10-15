<template>
  <section id="snippet-9" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15 text-center">
      <div class="row">
        <div class="col-lg-10 col-xl-8 col-xxl-7 mx-auto mb-8">
          <h2 class="display-5 mb-3">Fotogalerie</h2>
          <p class="lead fs-lg">
            Falls Sie wünschen, ein Bild aus dieser Galerie zu entfernen, schicken Sie uns gern eine Email an <a :href="`mailto:redaktion@wannefredder.de`"></a>
          </p>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="grid grid-view projects-masonry">
        <div class="isotope-filter filter mb-10">
          <ul>
            <li
              v-for="filter in filters"
              @click="() => updateCategory(filter.value)"
              :key="filter.id"
            >
              <a
                :class="`filter-item ${
                  currentCategory == filter.value ? 'active' : ''
                }`"
                >{{ filter.label }}</a
              >
            </li>
          </ul>
        </div>
        <div class="row gx-md-6 gy-6 isotope" ref="isotopeContainer">
          <div
            v-for="(project, i) in filteredItems"
            :key="project.id"
            :class="[
              'project',
              'item',
              `col-md-6`,
              `col-xl-4`,
            ]"
          >
            <figure class="overlay overlay-1 rounded">
              <div
                class="cursor-pointer"
                @click="() => setActiveLightBox(true, i)"
              >
                <img :src="project.image.src" alt="" />
                <span class="bg"></span>
              </div>
              <figcaption>
                <h5 class="from-top mb-0">{{ project.title }}</h5>
              </figcaption>
            </figure>
          </div>
          <!-- /.project -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.grid -->
    </div>
    <!-- /.container -->
   
    <!-- /.container -->
  </section>
  <Lightbox
    :images="images"
    :activeLightBox="activeLightBox"
    :firstSlideIndex="currentSlideIndex"
    @setActiveLightBox="setActiveLightBox"
  />
  <!-- Component for lightbox image slider  from omponents>common>Lightbox -->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import imagesLoaded from 'imagesloaded';
import Lightbox from '@/common/Lightbox.vue';

const projects = ref([
    "Weihnachtsmarkt 06.12.2025",
])

const activeLightBox = ref(false);
const currentSlideIndex = ref(1);
const images = ref([]);
onMounted(() => {
  images.value = projects.map((elm) => elm.fullImage);
});

const setActiveLightBox = (val, i) => {
  currentSlideIndex.value = i;
  activeLightBox.value = val;
};

const isotope = ref();

const initIsotop = async () => {
  const Isotope = (await import("isotope-layout")).default;
  // Initialize Isotope in the mounted hook
  isotope.value = new Isotope(isotopeContainer.value, {
    itemSelector: ".item",
    layoutMode: "masonry", // or 'fitRows', depending on your layout needs
  });
  imagesLoaded(isotopeContainer.value).on(
    "progress",
    function (instance, image) {
      // Trigger Isotope layout
      isotope.value.layout();
    }
  );
};

const filters = [
  { id: 1, label: "All", value: "*" },
  { id: 2, label: "Foods", value: "foods" },
  { id: 3, label: "Drinks", value: "drinks" },
  { id: 4, label: "Events", value: "events" },
  { id: 5, label: "Pastries", value: "pastries" },
];

const currentCategory = ref("*");
const filteredItems = ref(projects);

const updateCategory = (val) => {
  if (val == "*") {
    currentCategory.value = "*";
    // filteredItems.value = projects;
  } else {
    currentCategory.value = val;
    // filteredItems.value = [
    //   ...projects.filter((elm) => elm.categories.includes(val)),
    // ];
  }

  isotope.value.arrange({
    filter: currentCategory.value == "*" ? "*" : `.${currentCategory.value}`,
  });
  //   isotope.value.layout();
};

const isotopeContainer = ref();


onMounted(() => {
  initIsotop();

});
</script>

<style lang="scss" scoped></style>