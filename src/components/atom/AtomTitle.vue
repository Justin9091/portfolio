<script setup>

</script>

<template>
  <h1 :style="style">
    <slot></slot>
  </h1>
</template>

<script>
import {Position} from "@/enums/Position.js";
import {Size} from "@/enums/Size.js";

export default {
  name: 'AtomTitle',
  props: {
    position: {
      type: String,
      default: Position.LEFT
    },
    size: {
      type: String,
      default: Size.MEDIUM
    }
  },
  data() {
    return {
      textAlign: this.position,
      size: this.size
    };
  }
}
</script>

<style scoped>
h1 {
  padding: 0;
  margin: 0;
  text-align: v-bind('textAlign');
  font-size: v-bind('size');
}
</style>