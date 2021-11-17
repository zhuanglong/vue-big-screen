import echarts from '../../../../hooks/useECharts/echarts';

export const offlinePortalOptions = (params) => ({
  color: ['#73A0FA', '#73DEB3', '#32C5E9', '#67E0E3'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999',
      },
      lineStyle: {
        type: 'dashed',
      },
    },
  },
  grid: {
    left: '15',
    right: '15',
    bottom: '0',
    top: '30',
    containLabel: true,
  },
  legend: {
    data: ['门店1', '门店2', '门店3', '门店4'],
    show: true,
    textStyle: {
      color: '#BCDCFF',
    },
  },
  xAxis: [
    {
      type: 'category',
      data: params.xData,
      axisLabel: {
        color: '#BCDCF0',
        fontSize: 12,
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: true,
      },
      axisLine: {
        show: false,
      },
      boundaryGap: true,
    },
    {
      type: 'category',
      axisLabel: {
        color: '#BCDCF0',
        fontSize: 12,
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: true,
      },
      axisLine: {
        show: false,
      },
      boundaryGap: true,
    },
  ],
  yAxis: [
    {
      type: 'value',
      name: '单位/人',
      nameTextStyle: {
        color: '#BCDCFF',
      },
      axisLabel: {
        color: '#BCDCF0',
        fontSize: 12,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#252938',
        },
      },
      axisTick: {
        show: true,
      },
      axisLine: {
        show: true,
      },
    },
    {
      type: 'value',
      min: 0,
      max: 100,
      interval: 20,
      name: '密度',
      splitLine: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: '#94b5ca',
        },
      },
    },
  ],
  series: [
    {
      name: '门店1',
      type: 'line',
      data: params.data1,
    },
    {
      name: '门店2',
      type: 'line',
      data: params.data2,
    },
    {
      name: '门店3',
      type: 'line',
      data: params.data3,
    },
    {
      name: '门店4',
      type: 'line',
      data: params.data4,
    },
    {
      name: '额度',
      type: 'bar',
      data: params.barData,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(34,224,214,.8)',
          },
          {
            offset: 0.5,
            color: 'rgba(5,137,186,1)',
          },
          {
            offset: 1,
            color: 'rgba(11,12,31,1)',
          },
        ]),
        borderRadius: 7.5,
      },
      barMaxWidth: 15,
    },
  ],
});
