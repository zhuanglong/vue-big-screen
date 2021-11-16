<template>
  <div class="section1-container">
    <div class="left">数据分析1</div>
    <div class="midden">大数据可视化平台</div>
    <div class="right">数据分析2</div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {

    },
  });
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
      background-color: #0f1325;
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
      font-size: 18px;
      text-align: right;
      color: #fff;
      background-color: #0f1325;
    }
  }
</style>
