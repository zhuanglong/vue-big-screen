<template>
  <div class="section3-container">
    <Map />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import Map from './Map/index.vue';
</script>

<style lang="scss" scoped>
  .section3-container {
    display: grid;
    grid-template-columns: 980px;
    grid-template-rows: 70% 30%;
    margin: 0 10px;
  }
</style>
