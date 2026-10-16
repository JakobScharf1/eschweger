<template>
  <!-- <li class="nav-item">
    <router-link
      :class="['nav-link', { active: isActiveMenu('/veranstaltungen') }]"
      to="/veranstaltungen"
      >Veranstaltungen</router-link
    >
  </li> -->
  <li class="nav-item">
    <router-link
      :class="['nav-link', { active: isActiveMenu('/mitmachen') }]"
      to="/mitmachen"
      >Mitmachen</router-link
    >
  </li>
  <li class="nav-item">
    <router-link
      :class="['nav-link', { active: isActiveMenu('/ueber') }]"
      to="/ueber"
    >Über</router-link>
  </li>
  <li class="nav-item">
    <router-link
      :class="['nav-link', { active: isActiveMenu('/anzeigen') }]"
      to="/anzeigen"
    >Anzeigen</router-link>
  </li>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const pathName = route.path;

const isActiveMenu = (menuPath) => {
  return pathName.startsWith(menuPath);
};
</script>

<style lang="scss" scoped></style>
