<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
  <FontAwesomeIcon :icon="type"></FontAwesomeIcon>
</template>

<script>
export default {
  props: {
    type: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>