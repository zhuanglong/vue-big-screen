<template>
  <div
    class="UserSituation-table"
    ref="tEl"
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
    <div class="tbody" ref="tbodyEl" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <div
        class="tbody-tr"
        v-for="(row) in tbodyData"
        :key="row[0]._number"
        :num="row[0]._number"
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
  // 存在问题
  // 1、如果总行数为奇数，则奇偶行背景色会有重合，其实这不算bug

  import { ref, watch, onUnmounted, onMounted } from 'vue';
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

  const tEl = ref(null);
  const tbodyEl = ref(null);
  const theadData = ref([]);
  const tbodyData = ref([]);
  const rowCount = ref(0);

  const theadHeight = 35; // 表头行度
  let tbodyRowHeight = 0; // 表体行高
  let tailIndex = 0;
  let timing = null;
  const wait = 2000;

  const { height: tableHeight } = useElementSize(tEl);

  // 计算表头数据
  function calcTHeadData(data) {
    let newData = [];
    if (data.length > 0) {
      newData = [{ _indexTag: props.tableIndex }, ...data];
    }
    theadData.value = newData;
  }

  // 计算表体数据
  function calcTBodyData(data) {
    if (data.length === 0) return;
    tbodyRowHeight = (tableHeight.value - theadHeight) / props.rowNum;
    const newData = data.map((item) => {
      rowCount.value += 1;
      return [{ _number: rowCount.value, _height: tbodyRowHeight }, ...item];
    });

    // console.log(tailIndex, rowCount.value);
    // 在下标插入新增数据
    tbodyData.value.splice(tailIndex === 0 ? rowCount.value : tailIndex + 1, 0, ...newData);
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
  function startLoop() {
    clearLoop();
    timing = setInterval(() => {
      if (tbodyData.value.length === 0) return; // 没有数据
      if (tbodyData.value.length <= props.rowNum) return; // 数据总数大于行数才滚动
      tbodyData.value[0][0]._height = 0; // 第一行设置为0
      setTimeout(() => {
        // 把第一行移到尾部并恢复该行高
        const firstItem = tbodyData.value.splice(0, 1)[0];
        firstItem[0] = { ...firstItem[0], _height: tbodyRowHeight };
        tbodyData.value.push(firstItem);

        tailIndex = tbodyData.value.findIndex((item) => item[0]._number === rowCount.value);
      }, 300);
    }, wait);
  }

  // 关闭循环滚动
  function clearLoop() {
    timing && clearInterval(timing);
  }

  function handleMouseEnter() {
    clearLoop();
  }

  function handleMouseLeave() {
    startLoop();
  }

  watch(
    () => props.data,
    () => {
      calcTHeadData(props.data.thead);
      calcTBodyData(props.data.tbody);
    },
    { deep: true },
  );

  onMounted(() => {
    setTimeout(() => {
      calcTHeadData(props.data.thead);
      calcTBodyData(props.data.tbody)
      startLoop();
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
            border-radius: 2px;
          }
        }
      }
    }
  }
</style>
