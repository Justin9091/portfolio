<script setup>

import OrganismProgress from "@/components/organisms/OrganismProgress.vue";
import OrganismTimeline from "@/components/organisms/OrganismTimeline.vue";
import OrganismWork from "@/components/organisms/OrganismWork.vue";
import OrganismHero from "@/components/organisms/OrganismHero.vue";

const progress = [
  {
    title: "Vue",
    description: "Description 1",
    progress: 33,
    color: "#42b883",
  },
  {
    title: "Laravel",
    description: "Description 2",
    progress: 33,
    color: "#f4645f",
  },
  {
    title: ".NET",
    description: "Description 3",
    progress: 40,
    color: "#68217a",
  },
  {
    title: "Java",
    description: "Description 4",
    progress: 75,
    color: "#f0db4f",
  }
];

</script>

<template>
  <div class="container">
    <OrganismHero />
    <OrganismWork />
    <OrganismProgress :progress="progress"/>
    <OrganismTimeline />
  </div>
</template>

<style scoped>

.container {
  width: 100vw;
  min-height: 100vh;
  background: lightgray;
}

@media (prefers-color-scheme: dark) {
  .container {
    background-color: #333;
    color: #fff;
  }
}

</style>