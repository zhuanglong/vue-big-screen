// 关联数据类别
export const BrowseCategoriesOptions = params => ({
  radar: {
    center: ['50%', '50%'],
    radius: '70%',
    axisName: {
      formatter: function (name) {
        let arr;
        arr = ['{a|' + name + '}'];
        return arr.join('\n');
      },
      rich: {
        //根据文字的组设置格式
        a: {
          color: '#BCDCFF',
          fontSize: 14,
          fontWeight: 600,
          fontFamily: 'Source Han Sans CN',
        },
      },
    },
    // 名字和图形的距离
    axisNameGap: 5,
    indicator: params.indicator,
    splitLine: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    splitArea: {
      areaStyle: {
        color: [
          'rgba(84,136,255, 0.05)',
          'rgba(84,136,255, 0.1)',
          'rgba(84,136,255, 0.2)',
          'rgba(84,136,255, 0.3)',
          'rgba(84,136,255, 0.4)',
          'rgba(84,136,255, 0.5)',
        ].reverse(),
        shadowColor: 'rgba(0, 0, 0, .5)',
        shadowBlur: 5,
        shadowOffsetX: 10,
        shadowOffsetY: 10,
      },
    },
  },
  series: [
    {
      name: '用户浏览类别',
      type: 'radar',
      data: [params.data],
      label: {
        show: false,
        formatter: function (params) {
          return params.value + '万';
        },
        color: '#9ae8ac',
        distance: 10,
        align: 'right',
      },
      symbol: 'none',
      symbolSize: [6, 6],
      // 边缘颜色
      lineStyle: {
        color: 'rgba(160,159,246, 0.6)',
        width: 2,
      },
      areaStyle: {
        color: 'rgba(114,113,233,.4)',
        opacity: 0.8,
        shadowColor: 'rgba(115,149,255,1)',
        shadowBlur: 10,
      },
    },
  ],
});
