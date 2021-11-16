<template>
  <div class="section2-container">
    <div class="chart-wrapper">
      <BoxTitle title="今日流量态势" />
      <TrafficSituation />
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
</script>

<style lang="scss" scoped>
  .section2-container {
    display: grid;
    grid-template-columns: 450px;
    grid-template-rows: 360px 640px;
    row-gap: 10px;

    .chart-wrapper {
      padding: 10px;
      background-color: rgba(19, 25, 47, 0.6);
    }
  }
</style>
