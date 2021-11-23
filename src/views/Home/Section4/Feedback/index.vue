<template>
  <div class="chart-Feedback">
    <div ref="chartRef" :style="{ width, height }" />
    <div class="dis-text">{{name}}</div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useECharts } from '../../../../hooks/useECharts';
  import { feedbackOptions } from './options';

  const chartRef = ref();
  const props = defineProps({
    name: {
      type: String,
      default: '',
    },
    value: {
      type: Number,
      default: 0,
    },
    width: {
      type: String,
      default: '110px',
    },
    height: {
      type: String,
      default: '110px',
    },
  });

  const { setOptions } = useECharts(chartRef);

  const data = {
    number: props.value,
    title: props.name,
  };

  setOptions(feedbackOptions(data));
</script>

<style lang="scss" scoped>
  .chart-Feedback {
    display: flex;
    flex-direction: column;
    align-items: center;

    .dis-text {
      color: transparent;
      font-size: 0.2rem;
      font-weight: bold;
      background: linear-gradient(to bottom,#fff,#6176F4);
      -webkit-background-clip: text;
      background-clip: text;
    }
  }
</style>
