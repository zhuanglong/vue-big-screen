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
          v-if="tableIndex || index >= 0"
        >
          {{item}}
        </div>
      </template>
    </div>
    <!-- 表体 -->
    <div class="tbody" ref="tbodyEl">
      <div
        class="tbody-tr"
        v-for="(row, rowIndex) in tbodyData"
        :key="rowIndex"
        :style="{
          height: `${tbodyRowHeight}px`,
          lineHeight: `${tbodyRowHeight}px`,
          backgroundColor: getBackgroundColor(row[0]),
          ...loopAnimation(rowIndex, row[0]),
        }"
      >
        <template
          v-for="(column, columnIndex) in row"
          :key="columnIndex"
        >
          <div
            class="tbody-td"
            :style="calcTBodyTDWidth(columnIndex)"
            v-if="tableIndex || columnIndex >= 0"
          >
            <span :class="tableIndex && columnIndex === 0 && 'index-tag'">{{column}}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, defineProps, watch, onUnmounted } from 'vue';
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
  const tbodyEl = ref(null);;
  const theadHeight = ref(35); // 表格头行度
  const tbodyRowHeight = ref(0); // 表格内容行高
  const theadData = ref([]);
  const tbodyData = ref([]);
  let timing = null;
  const wait = 2000;

  const { height: tableHeight } = useElementSize(el);

  // 计算表头数据
  function calcTHeadData(data) {
    return [props.tableIndex, ...data];
  }

  // 计算表体数据
  function calcTBodyData(data) {
    const allRows = data.map((item, index) => [index + 1, ...item]);
    const sliceRows = allRows.slice(0, props.rowNum);
    tbodyRowHeight.value = (tableHeight.value - theadHeight.value) / sliceRows.length;
    return allRows;
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
    const newData = tbodyData.value.slice(0);
    timing && clearInterval(timing);
    timing = setInterval(() => {
      const firstItem = newData.splice(0, 1)[0];
      newData.push(firstItem);
      tbodyData.value = newData.slice(0);
    }, wait);

    // console.log(tbodyEl.value.children[0]);
    // tbodyEl.value.children[0].style.height = 0;
  }

  // 滚动效果
  function loopAnimation() {

  }

  watch(
    tableHeight,
    () => {
      theadData.value = calcTHeadData(props.data.thead);
      tbodyData.value = calcTBodyData(props.data.tbody);
      loop();
    },
  );

  onUnmounted(() => {
    timing && clearInterval(timing);
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
