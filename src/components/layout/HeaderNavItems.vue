<template>
  <li class="nav-item">
    <a
      class="nav-link"
      href="https://wannefredder.sumupstore.com/"
      target="_blank"
      >Shop</a
    >
  </li>
  <li class="nav-item">
    <router-link
      :class="['nav-link', { active: isActiveMenu('/veranstaltungen') }]"
      to="/veranstaltungen"
      >Veranstaltungen</router-link
    >
  </li>
  <li class="nav-item">
    <router-link
      :class="['nav-link', { active: isActiveMenu('/gewinnspiel') }]"
      to="/gewinnspiel"
      >Gewinnspiel</router-link
    >
  </li>
  <li class="nav-item">
    <router-link
      :class="['nav-link', { active: isActiveMenu('/unterstuetzen') }]"
      to="/unterstuetzen"
    >Unterstützen</router-link>
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
