<template>
  <div class="section2-container">
    <div class="chart-wrapper">
      <BoxTitle title="今日流量态势" />
      <TrafficSituation :data="trafficSituationData" />
    </div>
    <div class="chart-wrapper">
      <BoxTitle title="用户数据状态" />
      <UserSituation />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import BoxTitle from '../../../components/BoxTitle.vue';
  import TrafficSituation from './TrafficSituation/index.vue';
  import UserSituation from './UserSituation/index.vue';

  const trafficSituationData = ref({
    accessFrequency: 1000,
    peakFlow: 300,
    chartData: {
      timeList: ['9:00', '12:00', '15:00', '18:00', '21:00', '00:00'],
      outData: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02],
      inData: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14],
    },
  });
</script>

<style lang="scss" scoped>
  .section2-container {
    display: grid;
    grid-template-columns: 450px;
    grid-template-rows: 360px 640px;
    row-gap: 10px;

    .chart-wrapper {
      padding: 10px;
      border-radius: 5px;
      background-color: rgba(19, 25, 47, 0.6);
    }
  }
</style>
