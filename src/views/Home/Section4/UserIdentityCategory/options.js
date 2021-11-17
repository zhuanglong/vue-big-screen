export const userIdentityCategoryOptions = (params = []) => {
  const data = [];
  const className = [];
  const colorList = [];
  params.forEach((item) => {
    data.push(item.value);
    className.push(item.name);
    colorList.push(item.color);
  });
  const maxValue = Math.max.apply(null, data);
  const defaultData = Array(data.length).fill(maxValue);

  return {
    grid: {
      left: '3%',
      right: '3%',
      bottom: '5%',
      top: '5%',
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none',
      },
      formatter: function (params) {
        return `
          <span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:${params[0].color}'></span>${params[0].name}
          : ${params[0].value}
        `;
      },
    },
    backgroundColor: 'transparent',
    xAxis: {
      type: 'value',
      show: true,
      name: '(人)',
      splitLine: {
        show: false,
      },
    },
    yAxis: [
      {
        type: 'category',
        inverse: true,
        axisLabel: {
          show: true,
          color: '#fff',
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        data: className,
      },
      {
        type: 'category',
        show: false,
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
          color: '#ffffff',
          fontSize: '12',
          formatter: function (value) {
            return value + ' %';
          },
        },
        data: data,
      },
    ],
    series: [
      {
        name: '完成率',
        type: 'bar',
        zlevel: 1,
        barWidth: 15,
        data: data,
        itemStyle: {
          borderRadius: 15,
          // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
          //     offset: 0,
          //     color: 'rgb(57,89,255,1)'
          // }, {
          //     offset: 1,
          //     color: 'rgb(46,200,207,1)'
          // }]),
          color: (params) => {
            return colorList[params.dataIndex];
          },
        },
      },
      {
        name: '背景',
        type: 'bar',
        barWidth: 15,
        barGap: '-100%',
        data: defaultData,
        itemStyle: {
          color: '#1B375E',
          borderRadius: 15,
        },
      },
    ],
  };
};
