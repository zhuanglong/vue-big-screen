<template>
  <div class="section3-container">
    <!-- <Map width="100%" height="93%" /> -->
    <div class="chat-group">
      <FlowRate
        v-for="item in flowRateData"
        :key="item.id"
        :data="item"
        width="100%"
        height="100%"
      />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import Map from './Map/index.vue';
  import FlowRate from './FlowRate/index.vue';

  const flowRateData = ref([
    {
      id: 1,
      desc: '图像转化流量',
      value: 260,
      unit: '点击/张',
    },
    {
      id: 2,
      desc: '视频转化流量',
      value: 330,
      unit: '点击/个',
    },
    {
      id: 3,
      desc: '公众号流量',
      value: 62356,
      unit: '点击/篇',
    },
    {
      id: 4,
      desc: '安全服务流量',
      value: 5453,
      unit: '攻击/小时',
    },
    {
      id: 5,
      desc: '金融流量',
      value: 4.65,
      unit: '万/小时',
    },
    {
      id: 6,
      desc: '通信流量',
      value: 1250,
      unit: 'M /分',
    },
  ]);
</script>

<style lang="scss" scoped>
  .section3-container {
    display: grid;
    grid-template-columns: 960px;
    grid-template-rows: 710px 300px;
    padding: 0 20px;

    .chat-group {
      display: grid;
      grid-template-columns: repeat(3, 313px);
      grid-template-rows: repeat(2, 145px);
      column-gap: 10px;
      row-gap: 10px;
      justify-content: center;
    }
  }
</style>
