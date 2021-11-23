<template>
  <div class="chart-UserIdentityCategory">
    <div ref="chartRef" :style="{ width, height }" />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useECharts } from '../../../../hooks/useECharts';
  import { userIdentityCategoryOptions } from './options';

  const chartRef = ref();
  const props = defineProps({
    data: {
      type: Object,
      default: [],
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '95%',
    },
  });

  const { setOptions } = useECharts(chartRef);
  setOptions(userIdentityCategoryOptions(props.data));
</script>

<style lang="scss" scoped>
  .chart-UserIdentityCategory {
    width: 100%;
    height: 100%;
  }
</style>
