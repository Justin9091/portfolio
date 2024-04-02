<script setup>

import OrganismProgress from "@/components/organisms/OrganismProgress.vue";
import OrganismTimeline from "@/components/organisms/OrganismTimeline.vue";
import OrganismWork from "@/components/organisms/OrganismWork.vue";
import OrganismHero from "@/components/organisms/OrganismHero.vue";

const progress = [
  {
    title: "Vue",
    progress: 33,
    color: "#42b883",
  },
  {
    title: "Laravel",
    progress: 33,
    color: "#f4645f",
  },
  {
    title: ".NET",
    progress: 40,
    color: "#68217a",
  },
  {
    title: "Java",
    progress: 75,
    color: "#f0db4f",
  }
];

const work = [
  {
    title: "work.beestje.title",
    description: "work.beestje.description",
  },
  {
    title: "work.bumbo.title",
    description: "work.bumbo.description",
  }
]

</script>

<template>
  <div class="container">
    <OrganismHero />
    <OrganismWork :work="work" />
    <OrganismProgress :progress="progress"/>
    <OrganismTimeline />
  </div>
</template>

<style scoped>


</style>