import { ref, onMounted } from 'vue';

export default function useSize(options = {}) {
  const appRef = ref();
  // 定时函数
  let timer = null;
  // 设计稿尺寸
  const designWidth = options?.designWidth || 1920;
  const designHeight = options?.designHeight || 1080;
  // 设计稿比例
  const designRatio = designWidth / designHeight;

  const calcRate = () => {
    const ww = document.documentElement.clientWidth;
    const wh = document.documentElement.clientHeight;
    // 当前屏幕比例
    const realRatio = ww / wh;

    // 缩放比例
    const type = options?.type || 1;
    let scale = 1;
    if (type === 1) {
      // 方案1：始终在一屏内展示内容，为了保证正常比例，内容会被压缩导致左右留白；
      // 大屏基本上都是为对应分辨率专门开发，所以实际情况不会存在留白。
      if (realRatio < designRatio) {
        scale = ww / designWidth;
      } else {
        scale =  wh / designHeight;
      }
    } else if (type === 2) {
      // 方案2：X轴内容占满，Y轴内容超出则滚动
      scale = ww / designWidth;
    } else if (type === 3) {
      // 方案3：始终在一屏内展示内容， 拉伸X轴或Y轴内容，解决了留白的问题；
      // 但是在极端比例下布局会失真，不过大屏项目一般没有那么极端的屏幕比例；
      // 相对于1，2方案，方案3的布局最好不要用固定宽高，要不然不能填充满容器。
      if (realRatio < designRatio) {
        scale = ww / designWidth;
        appRef.value.style.height = `${wh / scale}px`;
      } else {
        scale =  wh / designHeight;
        appRef.value.style.width = `${ww / scale}px`;
      }
    }

    // 设置缩放
    appRef.value.style.transform = `scale(${scale}) translate(-50%, 0%)`;
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

  onMounted(() => {
    appRef.value.style.width = `${designWidth}px`;
    appRef.value.style.height = `${designHeight}px`;
    calcRate();
    windowResize();
  });

  return {
    appRef,
    calcRate,
    windowResize,
  };
}
