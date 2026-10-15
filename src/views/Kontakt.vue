<template>
    <section class="wrapper bg-gray">
        <div class="container py-10 py-md-14">
            <div class="row text-center mb-6 mb-md-8 mb-md-10">
                <h2>Kontakt aufnehmen</h2>
            </div>
            <div class="row">
                <Kontaktformular></Kontaktformular>
            </div>
        </div>
    </section>

    <section class="wrapper bg-gray">
        <div class="map">
            <iframe
            :src="mapSrc"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            style="width: 100%; height: 500px; border: 0"
            allowfullscreen
            ></iframe>
        </div>
    <!-- /.map -->
    </section>

</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import Kontaktformular from '@/components/Kontaktformular.vue';

const adresse = "Unter den Weiden 5, 37281 Wanfried"

const mapSrc = computed(
    () => `https://www.google.com/maps?q=${encodeURIComponent(adresse)}&output=embed`
)
</script>