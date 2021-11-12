<template>
  <div class="section2-container">
    <div class="chart chart-1" style="background-color: tan;">chart-1</div>
    <div class="chart chart-2" style="background-color: coral;">chart-2</div>
    <div class="chart chart-3" style="background-color: cadetblue;">chart-3</div>
    <div class="chart chart-4" style="background-color: coral;">chart-4</div>
    <div class="chart chart-5" style="background-color: tan;">chart-5</div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  .section2-container {
    display: grid;
    grid-template-columns: 350px 350px 480px 350px 350px;
    grid-template-rows: 500px;
    column-gap: 10px;
    margin-top: 10px;

    .chart {
      display: grid;
      justify-content: center;
      align-content: center;
      font-size: 18px;
    }
  }
</style>
