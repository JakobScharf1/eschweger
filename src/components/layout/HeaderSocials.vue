<template>
  <!-- Social media links using map -->
  <a
    v-for="(socialMedia, index) in socialMediaLinks"
    :key="index"
    :href="socialMedia.href"
  >
    <i :class="socialMedia.iconClass"></i>
  </a>
</template>

<script setup>
import { useMetaStore } from '@/stores/metadata';

const meta = useMetaStore()

const socialMediaLinks = [
  { id: 2, href: meta.facebook, iconClass: "uil uil-facebook-f" },
  { id: 4, href: meta.instagram, iconClass: "uil uil-instagram" },
];
</script>

<style scoped>
/* Add any additional styling here */
</style>
