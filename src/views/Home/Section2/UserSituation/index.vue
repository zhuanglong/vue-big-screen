<template>
  <div class="chart-UserSituation">
    <div class="chart" ref="chartRef" />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useECharts } from '../../../../hooks/useECharts';
  import { userOptions } from './options';

  const chartRef = ref();
  const { setOptions } = useECharts(chartRef);

  const data = {
    header: ['用户', '时间', '状态'],
    data: [
      ['用户1', '2020-11-11 12:00', '在线'],
      ['用户2', '2020-11-11 12:00', '离线'],
      ['用户3', '2020-11-11 12:00', '在线'],
      ['用户4', '2020-11-11 12:00', '在线'],
      ['用户5', '2020-11-11 12:00', '在线'],
      ['用户6', '2020-11-11 12:00', '离线'],
      ['用户7', '2020-11-11 12:00', '在线'],
      ['用户8', '2020-11-11 12:00', '在线'],
      ['用户9', '2020-11-11 12:00', '离线'],
      ['用户11', '2020-11-11 12:00', '离线'],
      ['用户12', '2020-11-11 12:00', '离线'],
      ['用户13', '2020-11-11 12:00', '离线'],
    ],
  };

  setOptions(userOptions(data));
</script>

<style lang="scss" scoped>
  .chart-UserSituation {
    .chart {
      width: 100%;
      height: 280px;
    }
  }
</style>