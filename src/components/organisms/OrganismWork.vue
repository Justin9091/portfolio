<script setup>

import AtomTitle from "@/components/atom/AtomTitle.vue";
import {Position} from "@/enums/Position.js";
import MoleculeGalleryCard from "@/components/molecules/MoleculeGalleryCard.vue";
</script>

<template>
  <AtomTitle :position="Position.CENTER">{{ $t("work.title") }}</AtomTitle>

  <div class="gallery-container" id="work-gallery-container">
    <MoleculeGalleryCard v-for="index in 10" :key="index" :value="'Card: ' + index" />
  </div>
</template>

<script>

export default {
};
</script>

<style scoped>
.gallery-container {
  display: flex;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 200px;
}

.gallery-container > * {
  position: absolute;
}
</style>