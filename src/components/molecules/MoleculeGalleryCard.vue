<script setup>
</script>

<template>
  <div class="gallery-card-container">
    <img src="https://via.placeholder.com/150" alt="gallery card"/>
    <p>{{ this.value }}</p>
  </div>
</template>

<script>
import {getCurrentInstance} from "vue";

export default {
  name: "MoleculeGalleryCard",

  mounted() {
    this.moveToStartPosition();
  },

  props: {
    value: {
      type: String,
      default: "Gallery Card",
    },
  },

  methods: {
    startMoving: function () {
      const currentCard = this.$el;
      let left = parseInt(currentCard.style.left) || 0;


      let length = this.calculateTransitionLength();
      console.log(length)
      this.transitionLength = length;

      left = -250; // Verplaats de kaart met 1px naar links
      currentCard.style.left = left + "px";
      currentCard.style.transition = `all ${this.transitionLength}s linear`;
      console.log("start moving: " + this.transitionLength)

      setTimeout(() => {
        this.moveToStartPosition();
      }, length * 1000);
    },
    moveToStartPosition: function () {
      let key = getCurrentInstance().vnode.key;
      console.log(key)

      const viewPortWidth = document.getElementById("work-gallery-container").offsetWidth;
      const interval = 250;

      this.$el.style.left = `${interval * key}px`;

      // Bereken transitieduur nadat de positie is ingesteld
      this.$nextTick(() => {
        this.$el.style.transition = `all ${this.transitionLength}s linear`;
        // Start de beweging nadat de transitieduur is ingesteld
        this.startMoving();
      });
    },
    calculateTransitionLength() {
      const distance = this.$el.style.left;
      return parseInt(distance) / 100;
    }
  },

  data() {
    return {
      transitionLength: 0.3,
    };
  },
};
</script>

<style scoped>
.gallery-card-container {
  text-align: center;
  position: absolute;
}
</style>
