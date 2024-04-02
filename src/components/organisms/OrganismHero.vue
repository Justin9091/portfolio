<script setup>
import AtomTitle from "@/components/atom/AtomTitle.vue";
import {Position} from "@/enums/Position.js";
import {Size} from "@/enums/Size.js";
import AtomImage from "@/components/atom/AtomImage.vue";
import MoleculeLanguageUpdate from "@/components/molecules/MoleculeLanguageUpdate.vue";
</script>

<template>
  <div class="hero-container">
    <div class="header">
      <AtomTitle :position="Position.LEFT" :size="Size.LARGE">{{ $t('hero.title') }}</AtomTitle>
      <AtomTitle :position="Position.LEFT" :size="Size.SMALL">{{ $t('hero.under_title') }}</AtomTitle>

      <MoleculeLanguageUpdate />
    </div>

    <div class="">
      <AtomImage :alt="$t('hero.image.alt')" src="https://placehold.co/400x600"/>
    </div>
  </div>
</template>

<style scoped>
.hero-container {
  display: flex;
  justify-content: center;
  gap: 5rem;
  align-items: center;
  height: 100vh;
  max-width: 100vw;
}

@media (max-width: 768px) {
  .header {
  }

  .hero-container {
    text-align: center;
    flex-direction: column;
    justify-content: start;
  }
}
</style>