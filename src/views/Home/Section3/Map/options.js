import echarts from '../../../../hooks/useECharts/echarts';

// 国家地理数据
import chinaGeo from './chinaGeo.json';
// 城市散点数据，https://echarts.apache.org/zh/option.html#series-effectScatter
import citysPoint from './citysPoint.json';
// 物流路线数据
import expressMoveLines from './expressMoveLines.json';

// 注册地图，https://echarts.apache.org/zh/option.html#geo.map
echarts.registerMap('china', chinaGeo);

export const mapOptions = () => ({
  title: {
    show: false,
    text: '全国物流输送图',
    left: 'center',
    textStyle: {
      color: '#fff',
    },
  },
  legend: {
    show: false,
  },
  geo: {
    nameMap: {
      China: '中国',
    },
    map: 'china',
    zoom: 1.2,
    emphasis: {
      label: {
        show: false
      },
      itemStyle: {
        borderColor: '#FFD1A3',
        areaColor: 'rgba(102,105,240,.3)',
        borderWidth: 1,
        shadowBlur: 5,
        shadowColor: 'rgba(135,138,255,.5)',
      },
    },
    itemStyle: {
      borderColor: 'rgba(255,209,163, .5)', // 区域边框颜色
      areaColor: 'rgba(73,86,166,.1)', // 区域颜色
      borderWidth: 0.5, // 区域边框宽度
      shadowBlur: 5,
      shadowColor: 'rgba(107,91,237,.7)',
    },
  },
  series: [
    {
      name: '地点',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
        brushType: 'stroke',
      },
      emphasis: {
        label: {
          show: true,
          position: 'right',
          formatter: '{b}',
        },
      },
      symbolSize: 2,
      showEffectOn: 'render',
      itemStyle: {
        color: '#46bee9',
      },
      data: citysPoint,
    },
    {
      name: '线路',
      type: 'lines',
      coordinateSystem: 'geo',
      zlevel: 2,
      zoom: 1,
      large: true,
      effect: {
        show: true,
        constantSpeed: 30,
        symbol: 'pin',
        symbolSize: 3,
        trailLength: 0,
      },
      lineStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: '#58B3CC',
            },
            {
              offset: 1,
              color: '#F58158',
            },
          ],
          false
        ),
        width: 1,
        opacity: 0.2,
        curveness: 0.1,
      },
      data: expressMoveLines,
    },
  ],
});
