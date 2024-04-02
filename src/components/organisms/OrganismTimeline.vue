<script setup>
import MoleculeTimeLinePoint from "@/components/molecules/MoleculeTimelinePoint.vue";
import AtomTitle from "@/components/atom/AtomTitle.vue";
import {Position} from "@/enums/Position.js";
</script>

<template>
  <div class="time-line-container">
    <AtomTitle :position="Position.CENTER">{{ $t('timeline.title') }}</AtomTitle>

    <MoleculeTimeLinePoint year="2019" description="Description 1"/>
    <MoleculeTimeLinePoint year="2020" description="Description 2"/>
    <MoleculeTimeLinePoint year="2021" description="Description 3"/>
    <MoleculeTimeLinePoint year="2022" description="Description 4"/>
  </div>
</template>

<style scoped>

</style>