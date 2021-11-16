<template>
  <div class="BoxTitle-container">
    <div class="title">{{ title }}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
  .BoxTitle-container {
    display: flex;
    align-items: center;
    height: 25px;
    .title {
      color: #bcdcff;
      font-size: 14px;
      font-weight: bold;
    }
  }
</style>
