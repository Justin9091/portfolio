<script setup>
import MoleculeTimeLinePoint from "@/components/molecules/MoleculeTimelinePoint.vue";
import AtomTitle from "@/components/atom/AtomTitle.vue";
import {Position} from "@/enums/Position.js";
</script>

<template>
  <div class="time-line-container">
    <AtomTitle :position="Position.CENTER">{{ $t('timeline.title') }}</AtomTitle>

    <div class="timeline">
      <div class="outer">
        <MoleculeTimeLinePoint year="2016" :description="$t('timeline.2016')"/>
        <MoleculeTimeLinePoint year="2019" :description="$t('timeline.2019')"/>
        <MoleculeTimeLinePoint year="2020" :description="$t('timeline.2020')"/>
        <MoleculeTimeLinePoint year="2022" :description="$t('timeline.2022')"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

.time-line-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
}

.outer {
  border-left: 2px solid var(--primary-color);
}

.timeline {
  margin: 20px auto;
  padding: 20px;
}
</style>