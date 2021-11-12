<template>
  <div class="section3-container">
    <div class="chart chart-1" style="background-color: sienna;">chart-1</div>
    <div class="chart chart-2" style="background-color: sienna;">
      <div style="background-color: pink;">chart-2-1</div>
      <div style="background-color: crimson;">chart-2-2</div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  .section3-container {
    display: grid;
    grid-template-columns: 955px 955px;
    grid-template-rows: 510px;
    column-gap: 10px;
    margin-top: 10px;

    .chart {
      display: grid;
      justify-content: center;
      align-content: center;
      font-size: 18px;
    }

    .chart-2 {
      display: grid;
      grid-template-columns: 462.5px 462.5px;
      grid-template-rows: 490px;
      column-gap: 10px;
      text-align: center;
      line-height: 462.5px;
    }
  }
</style>
