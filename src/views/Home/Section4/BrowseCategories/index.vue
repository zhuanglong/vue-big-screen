<template>
  <div class="chart-BrowseCategories">
    <div class="chart" ref="chartRef" />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useECharts } from '../../../../hooks/useECharts';
  import { BrowseCategoriesOptions } from './options';

  const chartRef = ref();
  const { setOptions } = useECharts(chartRef);

  const data = {
    data: [782, 621.2, 322.1, 525.3, 265, 224],
    indicator: [
      {
        name: '食物',
        max: 1000,
      },
      {
        name: '娱乐',
        max: 1000,
      },
      {
        name: '运动',
        max: 1000,
      },
      {
        name: '家居',
        max: 1000,
      },
      {
        name: '机械',
        max: 1000,
      },
      {
        name: '学习',
        max: 1000,
      },
    ],
  };

  setOptions(BrowseCategoriesOptions(data));
</script>

<style lang="scss" scoped>
  .chart-BrowseCategories {
    align-self: center;
    justify-self: center;

    .chart {
      width: 180px;
      height: 180px;
    }
  }
</style>
