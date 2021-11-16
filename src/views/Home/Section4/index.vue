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
        <!-- <TrafficSituation /> -->
      </div>
    </div>
    <div class="chart-wrapper chart-wrapper-down">
      <BoxTitle title="用户数据状态" />
      <!-- <UserSituation /> -->
    </div>
  </div>
</template>

<script setup>
  import BoxTitle from '../../../components/BoxTitle.vue';
  import BrowseCategories from './BrowseCategories/index.vue';
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
    }
  }
</style>
