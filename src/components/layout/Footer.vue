<template>
  <footer class="bg-navy text-inverse">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gy-6 gy-lg-0">
        <div class="col-md-4 col-lg-3">
          <div class="widget">
            <img
              class="mb-4"
              :src="meta.logoFooter"
              alt="photo"
              style="filter: invert(1);width: 250px;"
            />
            <p class="mb-4">
              © {{ new Date().getFullYear() }} Brombeerland gUG.
              <br class="d-none d-lg-block" />Alle Rechte vorbehalten.
            </p>
            <nav class="nav social social-white">
                <a
                    v-for="(socialMedia, index) in socialMediaLinks"
                    :key="index"
                    :href="socialMedia.href"
                    target="_blank"
                >
                    <i :class="socialMedia.iconClass"></i>
                </a>
            </nav>
            <!-- /.social -->
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-4 col-lg-3">
          <div class="widget">
            <h4 class="widget-title text-white mb-3">Kontakt</h4>
            <router-link class="text-sky" to="/kontakt">Kontaktformular</router-link>
            <address class="pe-xl-15 pe-xxl-17">
              {{ meta.strasse }}<br/>
              {{ meta.ort }}
            </address>
            <a :href="`mailto:${meta.email}`" class="text-sky">{{ meta.email }}</a><br />
            {{ meta.tel }}
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-4 col-lg-3">
          <div class="widget">
            <h4 class="widget-title text-white mb-3">Mehr erfahren</h4>
            <ul class="list-unstyled mb-0">
              <li><router-link class="d-block mb-1 text-sky" to="/satzung">Satzung</router-link></li>
              <li><a class="d-block mb-1 text-sky" href="https://brombeerland.de/leitbild.html" target="_blank">Leitbild</a></li>
              <li><router-link class="d-block mb-1 text-sky" to="/datenschutz">Datenschutz</router-link></li>
              <li><router-link class="d-block text-sky" to="/impressum">Impressum</router-link></li>
            </ul>
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-12 col-lg-3">
          <div class="widget">
            <h4 class="widget-title text-white mb-3">Unser Newsletter</h4>
            <div class="newsletter-wrapper">
              <form class="validate dark-fields">
                <button type="button" class="btn btn-soft-green w-100" @click="openPopup()">
                  Newsletter abonnieren
                </button>
              </form>
            </div>
            <!-- /.newsletter-wrapper -->
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </footer>
  <CommonScrolltop />

  <RapidMailPopup ref="popup"></RapidMailPopup>
</template>

<script setup>
import CommonScrolltop from "@/common/Scrolltop.vue";
import { useMetaStore } from "@/stores/metadata";
import { ref } from "vue";
import RapidMailPopup from "../RapidMailPopup.vue";

const meta = useMetaStore()

const socialMediaLinks = [
  { id: 1, href: meta.facebook, iconClass: "uil uil-facebook-f" },
  { id: 2, href: meta.instagram, iconClass: "uil uil-instagram" },
];

const popup = ref(null)

function openPopup() {
    popup.value.openPopup()
}

</script>
