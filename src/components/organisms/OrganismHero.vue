<script setup>
import AtomTitle from "@/components/atom/AtomTitle.vue";
import AtomImage from "@/components/atom/AtomImage.vue";
import MoleculeLanguageUpdate from "@/components/molecules/MoleculeLanguageUpdate.vue";
import {Position} from "@/enums/Position.js";
import {Size} from "@/enums/Size.js";

import img from "@/assets/img/Ik.png";

</script>

<template>
  <div class="hero-container">
    <div class="header">
      <MoleculeLanguageUpdate class="lang-updater"/>

      <AtomTitle :position="Position.LEFT" :size="Size.LARGE">{{ $t('hero.title') }}</AtomTitle>
      <AtomTitle :position="Position.LEFT" :size="Size.SMALL">{{ $t('hero.under_title') }}</AtomTitle>
    </div>

    <div class="img-container">
      <AtomImage class="img" :alt="$t('hero.image.alt')" :source="img" />
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
  padding: 0 2rem;
}

.header {
  text-align: center;
  padding-right: 50px;
}

.img {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
}

@media (max-width: 768px) {
  .hero-container {
    flex-direction: column;
    padding: 0;
  }

  .header {
    padding-right: 0;
  }

  .lang-updater {
    transform: translateY(10px);
    position: static;
  }

  .img-container {
    width: 90vw;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }

  .img {
    width: 90%;
    height: auto;
    max-height: none;
  }
}
</style>