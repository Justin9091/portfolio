<script setup>

</script>

<template>
  <div class="range-container">
    <input type="range" :value="value" :style="style" :disabled="!this.changeable" />
  </div>
</template>

<script>

export default {
  name: "AtomRange",
  props: {
    value: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: "blue",
    },
    changeable: {
      type: Boolean,
      default: true,
    }
  },
  computed: {
    style() {
      return {
        'background': this.color,
      }
    }
  }
};

</script>

<style scoped>
input[type="range"] {
  -webkit-appearance: none;
  border-radius: 5px;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  width: 100%;

}

.range-container {
  display: flex;
  justify-content: center;
}
</style>