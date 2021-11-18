<template>
  <div class="chart-BrowseCategories">
    <div ref="chartRef" :style="{ width, height }" />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useECharts } from '../../../../hooks/useECharts';
  import { browseCategoriesOptions } from './options';

  const chartRef = ref();
  const props = defineProps({
    data: {
      type: Object,
      default: {},
    },
    width: {
      type: String,
      default: '180px',
    },
    height: {
      type: String,
      default: '180px',
    },
  });

  const { setOptions } = useECharts(chartRef);
  setOptions(browseCategoriesOptions(props.data));
</script>

<style lang="scss" scoped>
  .chart-BrowseCategories {
    align-self: center;
    justify-self: center;
  }
</style>
