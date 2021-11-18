<template>
  <div class="timing-container">{{timeStr}}</div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { formatTime } from '../../../utils';

  const timeStr = ref('');
  let timing = null;
  const weekday = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

  const setTimingFn = () => {
    timing = setInterval(() => {
      const dateYear = formatTime(new Date(), 'yyyy-MM-dd');
      const dateDay = formatTime(new Date(), 'HH: mm: ss');
      const dateWeek = weekday[new Date().getDay()];
      timeStr.value = `${dateYear} | ${dateDay} ${dateWeek}`;
    }, 1000);
  };

  onMounted(() => {
    setTimingFn();
  });

  onUnmounted(() => {
    timing && clearInterval(timing);
  });
</script>

<style lang="scss" scoped>
  .timing-container {
    font-size: 20px;
    color: #bcdcff;
  }
</style>
