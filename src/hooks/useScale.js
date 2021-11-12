import { ref } from 'vue';

export default function useSize() {
  // 指向最外层容器
  const appRef = ref();
  // 定时函数
  let timer = null;
  // 设计稿尺寸
  const designWidth = 1920;
  const designHeight = 1080;
  // 设计稿比例
  const designRatio = designWidth / designHeight;

  const calcRate = () => {
    const ww = document.documentElement.clientWidth;
    const wh = document.documentElement.clientHeight;
    // 当前屏幕比例
    const realRatio = ww / wh;
    // 缩放比例
    const scaleRate = realRatio < designRatio ? ww / designWidth : wh / designHeight;
    appRef.value.style.transform = `scale(${scaleRate}) translate(-50%, -50%)`;
  };

  const resize = () => {
    // 防抖处理
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      calcRate();
    }, 300);
  };

  // 改变窗口大小重新绘制
  const windowResize = () => {
    window.addEventListener('resize', resize);
  };

  return {
    appRef,
    calcRate,
    windowResize,
  };
}
