<template>
  <div class="chart-TrafficSituation" ref="chartRef" />
</template>

<script setup>
  import { ref } from 'vue';
  import { useECharts } from '../../../../hooks/useECharts';
  import { trafficOptions } from './options';

  const chartRef = ref();
  const { setOptions } = useECharts(chartRef);

  const data = {
    timeList: ['9:00', '12:00', '15:00', '18:00', '21:00', '00:00'],
    outData: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02],
    inData: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14],
  };

  setOptions(trafficOptions(data));
</script>

<style lang="scss" scoped>
  .chart-TrafficSituation {
    width: 100%;
    height: 320px;
  }
</style>
