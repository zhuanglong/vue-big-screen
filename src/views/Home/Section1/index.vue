<template>
  <div class="section1-container">
    <div class="left"></div>
    <div class="midden">大数据可视化平台</div>
    <div class="right">
      <Timing />
    </div>
  </div>
</template>

<script setup>
  import Timing from './Timing.vue';
</script>

<style lang="scss" scoped>
  .section1-container {
    display: grid;
    grid-template-columns: 33% 1fr 33%;
    grid-template-rows: 50px;

    .left, .midden, .right {
      display: grid;
      align-content: center;
    }

    .left {
      padding-left: 20px;
      font-size: 18px;
      text-align: left;
      color: #fff;
    }

    .midden {
      font-size: 25px;
      font-weight: bold;
      text-align: center;
      color: #000;
      background-color: gold;
    }

    .right {
      padding-right: 20px;
      text-align: right;
    }
  }
</style>
