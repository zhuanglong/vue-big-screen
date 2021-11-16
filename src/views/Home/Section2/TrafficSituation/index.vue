<template>
  <div class="chart-TrafficSituation">
    <div className='title-dis'>
      <span>
        平均接纳次数(小时):
        <span className='title-dis-keyword'>{{ accessFrequency }}次</span>
      </span>
      <span>
        流量峰值:
        <span className='title-dis-keyword'>{{ peakFlow }}M</span>
      </span>
    </div>
    <div class="chart" ref="chartRef" />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useECharts } from '../../../../hooks/useECharts';
  import { trafficOptions } from './options';

  const chartRef = ref();
  const { setOptions } = useECharts(chartRef);

  const accessFrequency = 1500;
  const peakFlow = 300;
  const data = {
    timeList: ['9:00', '12:00', '15:00', '18:00', '21:00', '00:00'],
    outData: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02],
    inData: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14],
  };

  setOptions(trafficOptions(data));
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

    .chart {
      width: 100%;
      height: 280px;
    }
  }
</style>
