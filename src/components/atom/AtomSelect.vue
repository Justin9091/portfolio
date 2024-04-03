<script setup>

import AtomIcon from "@/components/atom/AtomIcon.vue";
</script>

<template>
  <div class="select">
    <div @click="toggleSelect()" class="button">
      <p>{{ $t(toggle) }}</p>
      <AtomIcon class="arrow" :type="['fas', 'arrow-down']"/>
    </div>

    <div class="options">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.isOpen = false;
    this.closeSelect();

    document.querySelector(".options").addEventListener("click", () => {
      this.toggleSelect();
    });
  },

  props: {
    toggle: {
      type: String,
      default: "Toggle"
    }
  },

  methods: {
    toggleSelect() {
      this.isOpen = !this.isOpen;

      if (this.isOpen) {
        this.openSelect();
      } else {
        this.closeSelect();
      }
    },

    openSelect() {
      let selectContainer = document.querySelector(".options");
      selectContainer.style.display = "block";

      let arrow = document.querySelector(".arrow");
      arrow.style.transform = "rotate(180deg)";
    },

    closeSelect() {
      let selectContainer = document.querySelector(".options");
      selectContainer.style.display = "none";

      let arrow = document.querySelector(".arrow");
      arrow.style.transform = "rotate(0deg)";
    }
  },

  data() {
    return {
      isOpen: false,
    }
  }
};
</script>

<style scoped>

p {
  margin: 0;
}

.button {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
}

.arrow {
  transition: transform 0.3s;
}

.select {
  margin: 15px;
  background: white;
  cursor: pointer;
  user-select: none;
  outline: none;
  border: none;
  font-size: inherit;
  border-radius: var(--border-radius);
  color: inherit;
}

@media (prefers-color-scheme: dark) {
  .select {
    background: #212121;
    color: white;
  }
}

</style>