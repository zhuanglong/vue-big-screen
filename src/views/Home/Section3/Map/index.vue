<template>
  <div class="chart-Map">
    <div ref="chartRef" :style="{ width, height }" />
  </div>
</template>

<script setup>
  // 存在的问题，影响帧率
  import { ref } from 'vue';
  import { useECharts } from '../../../../hooks/useECharts';
  import { mapOptions } from './options';

  const chartRef = ref();
  defineProps({
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '100%',
    },
  });

  const { setOptions } = useECharts(chartRef);
  setOptions(mapOptions());
</script>

<style lang="scss" scoped>
</style>
