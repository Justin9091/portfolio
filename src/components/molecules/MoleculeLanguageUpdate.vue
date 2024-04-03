<script setup>
import AtomSelect from "@/components/atom/AtomSelect.vue";
</script>

<template>
  <AtomSelect toggle="lang.update" class="select">
    <option @click="updateLanguage" v-for="(lang) in langs" :key="lang" :value="lang">{{ $t('lang.'+lang) }}</option>
  </AtomSelect>
</template>

<script>
export default {
  props: {
    langs: {
      type: Array,
      default: [ "en", "nl" ]
    },
  },

  methods: {
    updateLanguage(event) {
      this.$i18n.locale = event.target.value;
    }
  }
};
</script>

<style scoped>

.select {
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
}

</style>