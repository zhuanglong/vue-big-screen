import echarts from '../../../../hooks/useECharts/echarts';

export const feedbackOptions = (params) => ({
  title: {
    text: `{a|${params.number}}{b|%}`,
    x: 'center',
    y: 'center',
    textStyle: {
      rich: {
          a: {
            fontSize: 16,
            // fontSize: 20,
            fontWeight: 500,
            color: '#909dff',
          },
          b: {
            fontSize: 16,
            fontWeight: 500,
            color: '#909dff',
          }
      }
    },
  },
  series: [
    {
      type: 'pie',
      startAngle: 0,
      radius: ['80%', '70%'],
      center: ['50%', '50%'],
      emphasis: {
        scale: false, // 是否开启高亮后扇区的放大效果
      },
      data: [
        {
          value: params.number,
          name: params.title,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#5a8bfa',
              },
              {
                offset: 1,
                color: '#831bdb',
              },
            ]),
            shadowColor: 'rgba(175,143,230,.5)',
            shadowBlur: 10,
          },
          label: {
            show: false,
          },
          labelLine: {
            smooth: true,
            lineStyle: {
              width: 0,
            },
          },
        },
        {
          label: {
            show: false,
          },
          labelLine: {
            smooth: true,
            lineStyle: {
              width: 0,
            },
          },
          value: 100 - params.number,
          itemStyle: {
            color: 'rgba(79,76,192, 0.3)',
          },
        },
      ],
    },
  ],
});
