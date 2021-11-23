<template>
  <div class="BoxTitle-container">
    <i class="iconfont" :class="iconName" v-if="iconName" />
    <div class="title">{{ title }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  iconName: {
    type: String,
    default: '',
  }
});
</script>

<style lang="scss" scoped>
  .BoxTitle-container {
    display: flex;
    align-items: center;
    height: 25px;

    .iconfont {
      margin-right: 5px;
      color: #89e5ff;
      font-size: 14px;
    }

    .title {
      color: #bcdcff;
      font-size: 14px;
      font-weight: bold;
    }
  }
</style>
