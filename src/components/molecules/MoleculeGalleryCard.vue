<script setup>
import AtomImage from "@/components/atom/AtomImage.vue";
import AtomParagraph from "@/components/atom/AtomParagraph.vue";
</script>

<template>
  <div class="gallery-card-container">
    <AtomImage class="image" source="https://via.placeholder.com/250" alt="gallery card"/>

    <AtomParagraph class="title">{{ $t(value) }}</AtomParagraph>
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

.gallery-card-container {
  padding: 10px;
  border-radius: var(--border-radius);
  background: var(--highlight-color);
  text-align: center;
}

.image {
  padding: 0;
  margin: 0;
}

@media (max-width: 768px) {
  .image {
    width: 100%;
  }
}

</style>
