<script setup>

import AtomTitle from "@/components/atom/AtomTitle.vue";
import {Position} from "@/enums/Position.js";
import MoleculeGalleryCard from "@/components/molecules/MoleculeGalleryCard.vue";
import MoleculeCard from "@/components/molecules/MoleculeProgressCard.vue";
</script>

<template>
  <div class="work-container">
    <AtomTitle class="work-title" :position="Position.CENTER">{{ $t("work.title") }}</AtomTitle>

    <div class="gallery-container" id="work-gallery-container">
      <MoleculeGalleryCard v-for="(currentWork, key) in work" :key="key" :value="currentWork.title"/>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    work: {
      type: Array,
      default: [],
    },
  }
};
</script>

<style scoped>
.gallery-container {
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 3em;
}

.work-title {
  margin-bottom: 10px;
}

.work-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>