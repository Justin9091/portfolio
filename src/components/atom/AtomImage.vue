<script setup>

</script>

<template>
    <img src="/img/Ik.png"  :alt="alt">
</template>

<script>
export default {
  name: 'AtomImage',
  props: {
    src: {
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