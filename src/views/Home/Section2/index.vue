<template>
  <div class="section2-container">
    <div class="chart-wrapper">
      <BoxTitle title="今日流量态势" />
      <TrafficSituation :data="trafficSituationData" />
    </div>
    <div class="chart-wrapper">
      <BoxTitle title="用户数据状态" />
        <UserSituation
          width="100%"
          height="585px"
          :data="userSituationData"
          :columnWidth="['15%', '25%', '40%', '20%']"
          tableIndex="序号"
        />
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

  const userSituationData = ref();

  // setTimeout(() => {
    userSituationData.value = {
      thead: ['用户', '时间', '状态'],
      tbody: [
        ['用户1', '2020-11-11 12:00', '在线'],
        ['用户2', '2020-11-11 12:00', '离线'],
        ['用户3', '2020-11-11 12:00', '在线'],
        ['用户4', '2020-11-11 12:00', '在线'],
        ['用户5', '2020-11-11 12:00', '在线'],
        ['用户6', '2020-11-11 12:00', '离线'],
        ['用户7', '2020-11-11 12:00', '在线'],
        ['用户8', '2020-11-11 12:00', '在线'],
        ['用户9', '2020-11-11 12:00', '离线'],
        ['用户10', '2020-11-11 12:00', '离线'],
        ['用户11', '2020-11-11 12:00', '离线'],
        ['用户12', '2020-11-11 12:00', '离线'],
      ],
    };
  // }, 1000)

  let count = 12;
  setInterval(() => {
    const data = [];
    count += 1;
    data.push([`用户${count}`, '2020-11-11 12:00', '离线'])
    userSituationData.value.tbody = data;
  }, 3000)
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
