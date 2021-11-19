<template>
  <div class="container">
    <div class="main-view" ref="appRef">
      <Section1 />
      <div class="body">
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';

  import Section1 from './Section1/index.vue';
  import Section2 from './Section2/index.vue';
  import Section3 from './Section3/index.vue';
  import Section4 from './Section4/index.vue';

  import useScale from '../../hooks/useScale';

  const { appRef, calcRate, windowResize } = useScale();

  onMounted(() => {
    windowResize();
    calcRate();
  });
</script>

<style lang="scss" scoped>
  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #020308;

    .main-view {
      position: absolute;
      left: 50%;
      width: 1920px;
      height: 1080px;
      transform: scale(1) translate(-50%, 0%);
      transform-origin: left top;
      background-image: url('../../assets/pageBg.png');
      background-size: cover;
      background-position: center center;
      transition: all .3s linear;

      .body {
        display: flex;
        flex-direction: row;
        padding: 10px;
      }
    }
  }
</style>
