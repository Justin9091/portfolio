<script setup>
import AtomTitle from "@/components/atom/AtomTitle.vue";
import AtomParagraph from "@/components/atom/AtomParagraph.vue";
import AtomRange from "@/components/atom/AtomRange.vue";
import {Position} from "@/enums/Position.js";
import AtomIcon from "@/components/atom/AtomIcon.vue";
</script>

<template>
  <div class="card-container">
    <AtomTitle :position="Position.CENTER">{{ progress.title }}</AtomTitle>
    <AtomParagraph>{{ progress.description }}</AtomParagraph>

    <AtomRange :value="progress.progress" :color="progress.color"/>
  </div>
</template>

<script>
export default {
  name: "MoleculeCard",
  props: {
    progress: {
      type: Object,
    },
  },
  data() {
    return {
      shadowColor: this.progress.color,
    };
  }
};
</script>

<style scoped>

.card-container {
  width: fit-content;

  padding: 30px;
  border-radius: var(--border-radius);
  transition: scale 250ms, box-shadow 250ms;
}

.card-container:hover {
  cursor: default;
  scale: 1.05;
  box-shadow: v-bind('shadowColor') 0px 5px 20px;
}

@media (max-width: 768px) {
  .card-container {
    width: 100%;
  }
}
</style>