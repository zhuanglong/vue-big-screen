<template>
  <div class="section4-container">
    <div class="chart-wrapper chart-wrapper-up">
      <div>
        <BoxTitle title="关联数据类别分布" />
        <div class="chart-item">
          <BrowseCategories />
          <img class="earth-gif" src="../../../assets/images/earth-rotate.gif" alt="" />
        </div>
      </div>
      <div>
        <BoxTitle title="平均用户类别排布" />
        <UserIdentityCategory :data="userIdentityCategoryData" />
      </div>
    </div>
    <div class="chart-wrapper chart-wrapper-down">
      <BoxTitle title="今日线下门户流量" />
      <div class="chart-item">
        <div class="feedback-wrapper">
          <Feedback
            v-for="item in feedbackData"
            :name="item.name"
            :value="item.value"
          />
        </div>
        <OfflinePortal :data="offlinePortalData" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import BoxTitle from '../../../components/BoxTitle.vue';
  import BrowseCategories from './BrowseCategories/index.vue';
  import UserIdentityCategory from './UserIdentityCategory/index.vue';
  import Feedback from './Feedback/index.vue';
  import OfflinePortal from './OfflinePortal/index.vue';

   const userIdentityCategoryData = ref([
    {
      name: '公务',
      value: 57,
      color: '#39B3FF',
    },
    {
      name: '学生',
      value: 167,
      color: '#47E0E0',
    },
    {
      name: '教师',
      value: 123,
      color: '#7891D9',
    },
    {
      name: '军区',
      value: 55,
      color: '#83D978',
    },
    {
      name: '企业',
      value: 198,
      color: '#C7A530',
    },
  ]);

  const feedbackData = ref([{
    name: '服务质量',
    value: 90,
  }, {
    name: '交互体验',
    value: 82,
  }, {
    name: '安全防护',
    value: 85,
  }]);

  const offlinePortalData = ref({
    data1: [80, 152, 101, 134, 90, 130],
    data2: [120, 182, 191, 210, 170, 110],
    data3: [110, 132, 201, 154, 150, 80],
    data4: [90, 142, 161, 114, 190, 170],
    xData: ['9:00', '12:00', '15:00', '18:00', '21:00', '00:00'],
    barData: [32.2, 60, 32.6, 36.4, 53.3, 35],
  });
</script>

<style lang="scss" scoped>
  .section4-container {
    display: grid;
    grid-template-columns: 450px;
    grid-template-rows: 500px 500px;
    row-gap: 10px;

    .chart-wrapper {
      padding: 10px;
      // background-color: rgba(19, 25, 47, 0.6);

      &.chart-wrapper-up {
        display: grid;
        grid-template-columns: 430px;
        grid-template-rows: 240px 240px;

        .chart-item {
          display: grid;
          grid-template-columns: 215px 215px;
          grid-template-rows: 215px;

          .earth-gif {
            align-self: center;
            justify-self: center;
            width: 70%;
            border-radius: 50%;
          }
        }
      }

      &.chart-wrapper-down {
        border-radius: 5px;
        background-color: rgba(19, 25, 47, 0.6);

        .chart-item {
          display: grid;
          grid-template-columns: 430px;
          grid-template-rows: 170px 285px;
        }

        .feedback-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 15px;
        }
      }
    }
  }
</style>
