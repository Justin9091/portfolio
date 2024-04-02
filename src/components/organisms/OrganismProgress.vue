<script setup>
import MoleculeCard from "@/components/molecules/MoleculeProgressCard.vue";
import AtomTitle from "@/components/atom/AtomTitle.vue";
import {Position} from "@/enums/Position.js";
</script>

<template>
  <div class="progress-container">
    <AtomTitle :position="Position.CENTER">{{ $t('progress.title') }}</AtomTitle>

    <div class="cards-container">
      <MoleculeCard v-for="(currentProgress, key) in progress" :key="key" :progress="currentProgress"/>
    </div>
  </div>
</template>

<script>

export default {
  name: "OrganismProgress",
  props: {
    progress: {
      type: Array,
      default: [],
    },
  }
};

</script>

<style scoped>

.progress-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
}

.cards-container {
  display: flex;
  gap: 3em;
  justify-content: center;
  padding: 10px;
  margin-inline: 10vw;
}

@media (max-width: 768px) {
  .cards-container {
    flex-direction: column;
    justify-content: flex-start;
    padding: 5px;
  }
}
</style>