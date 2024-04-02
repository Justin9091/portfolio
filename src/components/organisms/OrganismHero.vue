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
      <MoleculeLanguageUpdate class="lang-updater"/>

      <AtomTitle :position="Position.LEFT" :size="Size.LARGE">{{ $t('hero.title') }}</AtomTitle>
      <AtomTitle :position="Position.LEFT" :size="Size.SMALL">{{ $t('hero.under_title') }}</AtomTitle>
    </div>

    <div class="img-container">
      <AtomImage class="img" :alt="$t('hero.image.alt')" src="src/assets/img/Ik.png"/>
    </div>
  </div>
</template>

<style scoped>

.hero-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 100%;
  padding: 0 2rem; /* Added padding for better spacing */
}

.header {
  text-align: center;
}

.img {
  max-width: 100%; /* Make the image responsive */
  max-height: 70vh; /* Limit the maximum height to avoid distortion */
  object-fit: contain; /* Preserve aspect ratio */
}

@media (max-width: 768px) {
  .hero-container {
    flex-direction: column;
    padding: 0;
  }

  .lang-updater {
    position: static;
  }

  .img-container {
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  .img {
    width: 90%;
    height: auto;
    max-height: none;
  }
}
</style>