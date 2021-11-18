<template>
  <div class="chart-TrafficSituation">
    <div className='title-dis'>
      <span>
        平均接纳次数(小时):
        <span className='title-dis-keyword'>{{data.accessFrequency}}次</span>
      </span>
      <span>
        流量峰值:
        <span className='title-dis-keyword'>{{data.peakFlow}}M</span>
      </span>
    </div>
    <div ref="chartRef" :style="{ width, height }" />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useECharts } from '../../../../hooks/useECharts';
  import { trafficSituationOptions } from './options';

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
      default: '280px',
    },
  });

  const { setOptions } = useECharts(chartRef);
  setOptions(trafficSituationOptions(props.data.chartData));
</script>

<style lang="scss" scoped>
  .chart-TrafficSituation {
    .title-dis {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 20px;
      font-size: 12px;
      color: #c0c9d2;

      &-keyword {
        padding-left: 3px;
        color: #47dae8;
      }
    }
  }
</style>
