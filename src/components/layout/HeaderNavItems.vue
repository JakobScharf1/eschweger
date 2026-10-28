<template>
  <!-- <li class="nav-item">
    <router-link
      :class="['nav-link', { active: isActiveMenu('/veranstaltungen') }]"
      to="/veranstaltungen"
      >Veranstaltungen</router-link
    >
  </li> -->
  <li class="nav-item dropdown d-flex align-items-center">
      <button
        type="button"
        class="nav-link dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        aria-label="Untermenü öffnen"
      >Hefte</button>
      <ul class="dropdown-menu">
        <li><router-link class="dropdown-item" to="/demo">Alle Hefte</router-link></li>
        <li><router-link class="dropdown-item" to="/gewinnspiele">Gewinnen</router-link></li>
        <li><span class="dropdown-item clickable" @click="openPopup">Newsletter</span></li>
      </ul>
    >
  </li>
 
  <li class="nav-item dropdown d-flex align-items-center">
      <button
        type="button"
        class="nav-link dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        aria-label="Untermenü öffnen"
      >Anzeigen</button>
      <ul class="dropdown-menu">
        <li><router-link class="dropdown-item" to="/anzeigen">Anzeige schalten</router-link></li>
        <li><router-link class="dropdown-item" to="/kleinanzeigen">Kleinanzeigen</router-link></li>
      </ul>
    >
  </li>

    <li class="nav-item dropdown d-flex align-items-center">
      <button
        type="button"
        class="nav-link dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        aria-label="Untermenü öffnen"
      >Mitmachen</button>
      <ul class="dropdown-menu">
        <li><router-link class="dropdown-item" to="/mitmachen">Mitmachen</router-link></li>
        <li><router-link class="dropdown-item" to="/foerdern">Fördermitgliedschaft</router-link></li>
      </ul>
    >
  </li>

  <li class="nav-item">
    <router-link
      :class="['nav-link', { active: isActiveMenu('/ueber') }]"
      to="/ueber"
    >Über</router-link>
  </li>

  <RapidMailPopup ref="popup"></RapidMailPopup>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from 'vue';
import RapidMailPopup from '@/components/RapidMailPopup.vue';

const popup = ref(null)

function openPopup() {
    popup.value.openPopup()
}

const route = useRoute();

const pathName = route.path;

const isActiveMenu = (menuPath) => {
  return pathName.startsWith(menuPath);
};
</script>

<style lang="scss" scoped></style>
