<template>
  <div class="chart-OfflinePortal">
    <div ref="chartRef" :style="{ width, height }" />
  </div>
</template>

<script setup>
  import { ref, defineProps } from 'vue';
  import { useECharts } from '../../../../hooks/useECharts';
  import { offlinePortalOptions } from './options';

  const chartRef = ref();
  const props = defineProps({
    data: {
      type: Object,
      default: {},
    },
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
  setOptions(offlinePortalOptions(props.data));
</script>

<style lang="scss" scoped>
</style>
