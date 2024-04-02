<script setup>

import AtomParagraph from "@/components/atom/AtomParagraph.vue";
import AtomIcon from "@/components/atom/AtomIcon.vue";
</script>

<template>
  <div class="timeline-point-container">
    <AtomIcon class="icon" :type="['far', 'circle']" />

    <AtomParagraph class="year">{{ year }}</AtomParagraph>
    <AtomParagraph>{{ description }}</AtomParagraph>
  </div>
</template>

<script>
export default {
  props: {
    year: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.timeline-point-container {
  display: flex;
  align-items: center;
}

.timeline-point-container .icon {
 font-size: 2.5em;
}

.timeline-point-container .year {
  font-style: italic;
}

.timeline-point-container .year::after {
  content: ": ";
  margin-right: 0.5rem;
}
</style>