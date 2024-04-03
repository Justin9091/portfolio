<script setup>

</script>

<template>
    <img :src="source" :alt="alt">
</template>

<script>
export default {
  name: 'AtomImage',
  props: {
    source: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
img {
  border-radius: var(--border-radius);
}
</style>