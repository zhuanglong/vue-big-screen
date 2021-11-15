<template>
  <div class="container">
    <div class="main-view" ref="appRef">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';

  import Section1 from './Section1.vue';
  import Section2 from './Section2.vue';
  import Section3 from './Section3.vue';

  import useScale from '../../hooks/useScale';

  const { appRef, calcRate, windowResize } = useScale();

  onMounted(() => {
    windowResize();
    calcRate();
  });
</script>

<style lang="scss">
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
    }
  }
</style>
