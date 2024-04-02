<script setup>

</script>

<template>
  <div class="timeline-point-container">
    <div class="card">
      <div class="info">
        <h3 class="title">{{ this.year }}</h3>
        <p>{{ this.description }}</p>
      </div>
    </div>
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

* {
  margin: 0;
  padding: 0;
}

.card {
  top: -10px;
  position: relative;
  margin: 0 0 20px 20px;
  padding: 10px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.title {
  color: var(--primary-color);
  position: relative;
}

.title::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background: var(--background-color);
  border-radius: 999px;
  left: -39px;
  border: 3px solid var(--primary-color);
}
</style>