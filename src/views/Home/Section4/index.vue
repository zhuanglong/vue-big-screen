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
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import BoxTitle from '../../../components/BoxTitle.vue';
  import BrowseCategories from './BrowseCategories/index.vue';
  import UserIdentityCategory from './UserIdentityCategory/index.vue';

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
      }
    }
  }
</style>
