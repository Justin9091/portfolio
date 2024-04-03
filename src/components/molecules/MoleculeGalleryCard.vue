<script setup>
import AtomImage from "@/components/atom/AtomImage.vue";
import AtomParagraph from "@/components/atom/AtomParagraph.vue";

</script>

<template>
  <div class="gallery-card-container">
    <img v-if="$t(value) === 'Bumbo'" class="image" src="@/assets/img/Bumbo.png" :alt="$t(value)"/>
    <img v-if="$t(value) === 'Beestje op je feestje'" class="image" src="@/assets/img/Beestje.png" :alt="$t(value)"/>

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
    }
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
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: var(--border-radius);
  padding: 0;
  margin: 0;
}

@media (max-width: 768px) {
  .image {
    width: 100%;
  }
}

</style>
