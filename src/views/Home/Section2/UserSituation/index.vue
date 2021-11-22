<template>
  <div
    class="UserSituation-table"
    ref="el"
    :style="{ width, height }"
  >
    <!-- 表头 -->
    <div
      class="thead"
      :style="{
        height: `${theadHeight}px`,
        lineHeight: `${theadHeight}px`,
      }"
    >
      <template
        v-for="(item, index) in theadData"
        :key="index"
      >
        <div
          class="thead-th"
          :style="calcTHeadTHWidth(index)"
          v-if="tableIndex || index > 0"
        >
          <span v-if="tableIndex && index === 0">{{item._indexTag}}</span>
          <span v-else>{{item}}</span>
        </div>
      </template>
    </div>
    <!-- 表体 -->
    <div class="tbody" ref="tbodyEl">
      <div
        class="tbody-tr"
        v-for="(row) in tbodyData"
        :key="row[0]._number"
        :_number="row[0]._number"
        :style="{
          height: `${row[0]._height}px`,
          lineHeight: `${row[0]._height}px`,
          backgroundColor: getBackgroundColor(row[0]._number),
        }"
      >
        <template
          v-for="(column, columnIndex) in row"
          :key="columnIndex"
        >
          <div
            class="tbody-td"
            :style="calcTBodyTDWidth(columnIndex)"
            v-if="tableIndex || columnIndex > 0"
          >
            <span class="index-tag" v-if="tableIndex && columnIndex === 0">{{column._number}}</span>
            <span v-else>{{column}}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, defineProps, watch, onUnmounted, onMounted } from 'vue';
  import { useElementSize } from '@vueuse/core';

  const props = defineProps({
    // 表格宽高
    width: {
      type: String,
      default: '100%',
    },
    // 表格高
    height: {
      type: String,
      default: '100%',
    },
    // 行号
    tableIndex: {
      type: String,
      default: '序号',
    },
    // 列宽度
    columnWidth: {
      type: Array,
      default: [],
    },
    // 行数
    rowNum: {
      type: Number,
      default: 10,
    },
    // 表头和表数据
    data: {
      type: Object,
      default: {
        thead: [],
        tbody: [],
      },
    },
  });

  const el = ref(null);
  const tbodyEl = ref(null);
  const theadData = ref([]);
  const tbodyData = ref([]);
  const rowCount = ref(0);
  const rowCountPrev = ref(0);

  const theadHeight = 35; // 表格头行度
  let tbodyRowHeight = 0; // 表格内容行高
  const wait = 2000;
  let timing = null;

  const { height: tableHeight } = useElementSize(el);

  // 计算表头数据
  function calcTHeadData(data) {
    if (data.length > 0) {
      return [
        {
          _indexTag: props.tableIndex,
        },
        ...data
      ];
    } else {
      return [];
    }
  }

  // 计算表体数据
  function calcTBodyData(data) {
    tbodyRowHeight = (tableHeight.value - theadHeight) / props.rowNum;
    if (data.length === 0) return;
    const tailIndex = tbodyData.value.findIndex((item) => item[0]._number === rowCount.value);
    console.log(tailIndex);
    const newData = data.map((item, index) => {
      rowCount.value += 1;
      return [
        {
          _number: rowCount.value,
          _height: tbodyRowHeight,
        },
        ...item,
      ];
    });

    // 找到尾部所在的下标

    if (rowCountPrev.value === 0) {
      tbodyData.value = tbodyData.value.concat(newData);
    } else {
      tbodyData.value.splice(tailIndex, 0, ...newData);
      tbodyData.value = tbodyData.value;
    }

    rowCountPrev.value = rowCount.value;
  }

  // 计算表头的列宽度
  function calcTHeadTHWidth(index) {
    index = props.tableIndex ? index : index -1; // 如果有“序号”列，则按原始下标，否则 -1
    return (props.columnWidth[index] ? { width: props.columnWidth[index] } : { flex: 1 });
  }

  // 计算表体的列宽度
  function calcTBodyTDWidth(index) {
    index = props.tableIndex ? index : index -1; // 如果有“序号”列，则按原始下标，否则 -1
    return (props.columnWidth[index] ? { width: props.columnWidth[index] } : { flex: 1 });
  }

  // 奇偶行背景色
  function getBackgroundColor(rowIndex) {
    return rowIndex % 2 === 0 ? 'rgb(9, 24, 79)' : 'rgb(7, 12, 52)';
  }

  // 循环滚动
  function loop() {
    clearLoop();
    timing = setInterval(() => {
      if (tbodyData.value.length === 0) return; // 没有数据
      if (tbodyData.value.length <= props.rowNum) return; // 数据总数大于行数才滚动
      tbodyData.value[0][0]._height = 0; // 第一行设置为0
      setTimeout(() => {
        // 把第一行移到尾部
        const firstItem = tbodyData.value.splice(0, 1)[0];
        firstItem[0] = { ...firstItem[0], _height: tbodyRowHeight };
        tbodyData.value.push(firstItem);
      }, 300);
    }, wait);
  }

  function clearLoop() {
    timing && clearInterval(timing);
  }

  watch(
    () => props.data,
    () => {
      clearLoop();
      theadData.value = calcTHeadData(props.data.thead);
      calcTBodyData(props.data.tbody);
      loop();
    },
    { deep: true },
  );

  onMounted(() => {
    setTimeout(() => {
      theadData.value = calcTHeadData(props.data.thead);
      calcTBodyData(props.data.tbody)
      loop();
    });
  });

  onUnmounted(() => {
    clearLoop();
  });
</script>

<style lang="scss" scoped>
  @mixin ellipsis-text() {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .UserSituation-table {
    margin-top: 10px;
    overflow: hidden;

    .thead {
      display: flex;
      flex-direction: row;
      background-color: rgb(68, 61, 197);

      .thead-th {
        padding: 0 10px;
        font-size: 16px;
        color: #fff;
        @include ellipsis-text();
      }
    }

    .tbody {
      display: flex;
      flex-direction: column;

      .tbody-tr {
        display: flex;
        flex-direction: row;
        transition: all .3s;
        overflow: hidden;

        .tbody-td {
          padding: 0 10px;
          font-size: 18px;
          color: #fff;
          @include ellipsis-text();

          .index-tag {
            padding: 2px 5px;
            background-color: rgb(68, 61, 197);
          }
        }
      }
    }
  }
</style>
