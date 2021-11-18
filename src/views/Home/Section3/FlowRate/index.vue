<template>
  <div class="chart-FlowRate" :style="{ width, height }">
    <img class="img" :src="getImageUrl(data.id)" alt="" />
    <div class="content">
      <span class="desc">{{data.desc}}</span>
      <span class="count-wrapper">
        <span class="number">{{data.value}}</span>
        <span class="unit">{{data.unit}}</span>
      </span>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    data: {
      type: Object,
      default: () => ({}),
    },
    width: {
      type: String,
      default: '300px',
    },
    height: {
      type: String,
      default: '150px',
    },
  });

  const getImageUrl = (id) => {
    return new URL(`../../../../assets/images/center-details-data${id}.png`, import.meta.url).href;
  };
</script>

<style lang="scss" scoped>
  .chart-FlowRate {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    border-radius: 5px;
    border: 1px solid #343f4b;
    background-color: rgba(19,25,47,0.8);

    .img {
      width: 100px;
      height: 100px;
      margin-right: 20px;
    }

    .content {
      display: flex;
      flex-direction: column;

      .desc {
        font-size: 16px;
        color: #bcdcff;
      }

      .count-wrapper {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        margin-top: 20px;

        .number {
          font-size: 24px;
          color: transparent;
          font-weight: bolder;
          background: linear-gradient(to bottom,#fff,#4db6e5);
          -webkit-background-clip: text;
          background-clip: text;
        }

        .unit {
          margin-left: 10px;
          font-size: 18px;
          font-weight: bold;
          color: transparent;
          background: linear-gradient(to bottom,#fff,#4db6e5);
          -webkit-background-clip: text;
          background-clip: text;
        }
      }
    }
  }
</style>
