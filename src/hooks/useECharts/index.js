import { unref, nextTick, computed, ref } from 'vue';
import { useDebounceFn, tryOnUnmounted, useTimeoutFn, useEventListener } from '@vueuse/core';

import echarts from './echarts';
// import echartsTheme from './echartsTheme';

export function useECharts(elRef) {
  const cacheOptions = ref({});

  let chartInstance = null;
  let removeResizeFn = () => {};
  const resizeFn = useDebounceFn(resize, 200);

  const getOptions = computed(() => {
    return {
      backgroundColor: 'transparent',
      ...cacheOptions.value,
    };
  });

  // 初始化图表
  function initCharts() {
    const el = unref(elRef);
    if (!el) {
      return;
    }

    // 使用主题
    // echarts.registerTheme('myTheme', echartsTheme);
    // chartInstance = echarts.init(el, 'myTheme');

    chartInstance = echarts.init(el, null);
    removeResizeFn = useEventListener(window, 'resize', resizeFn);
  }

  // 设置图表数据
  function setOptions(options, clear = true) {
    const el = unref(elRef);
    cacheOptions.value = options;

    if (el && el.offsetHeight === 0) {
      useTimeoutFn(() => {
        setOptions(unref(getOptions));
      }, 30);
      return;
    }
    nextTick(() => {
      if (!chartInstance) {
        initCharts();
        if (!chartInstance) return;
      }
      clear && chartInstance.clear();
      chartInstance.setOption(unref(getOptions));
    });
  }

  function resize() {
    chartInstance && chartInstance.resize();
  }

  function getInstance() {
    if (!chartInstance) {
      initCharts();
    }
    return chartInstance;
  }

  tryOnUnmounted(() => {
    if (!chartInstance) return;
    removeResizeFn();
    chartInstance.dispose();
    chartInstance = null;
  });

  return {
    resize,
    echarts,
    setOptions,
    getInstance,
  };
}
