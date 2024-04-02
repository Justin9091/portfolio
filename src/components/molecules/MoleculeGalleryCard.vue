<script setup>
import AtomImage from "@/components/atom/AtomImage.vue";
</script>

<template>
  <div class="gallery-card-container">
    <AtomImage src="https://via.placeholder.com/150" alt="gallery card"/>
    <p>{{ $t(this.value) }}</p>
  </div>
</template>

<script>

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
