<script setup>
import AtomImage from "@/components/atom/AtomImage.vue";
</script>

<template>
  <div class="gallery-card-container">
    <AtomImage src="https://via.placeholder.com/150" alt="gallery card"/>
    <p>{{ this.value }}</p>
  </div>
</template>

<script>
import {getCurrentInstance} from "vue";

export default {
  name: "MoleculeGalleryCard",

  props: {
    value: {
      type: String,
      default: "Gallery Card",
    },
  },
};
</script>

<style scoped>
</style>
