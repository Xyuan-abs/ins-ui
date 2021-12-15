import { computed } from 'vue'

/**
 * 获取表单项 attrs
 * @param {*} item 表单项配置
 * @param {*} elementType 表单项类型
 * @returns
 */
export default function (item, elementType) {
  const defaultAttrs = {
    clearable: true,
    placeholder: '请选择' + (item.label ?? ''),
  }
  const dateAttrs = {
    type: 'date',
    'value-format': 'YYYY-MM-DD',
  }
  const monthAttrs = {
    type: 'month',
    'value-format': 'YYYY-MM',
  }
  const yearAttrs = {
    type: 'year',
    'value-format': 'YYYY',
  }
  const weekAttrs = {
    type: 'week',
    format: 'gggg 第 ww 周',
    'value-format': 'gggg 第 ww 周',
  }
  const dateTimeAttrs = {
    type: 'datetime',
    'value-format': 'YYYY-MM-DD HH:mm:ss',
  }

  const dateRangeAttrs = {
    type: 'daterange',
    'range-separator': '至',
    'start-placeholder': '开始日期',
    'end-placeholder': '结束日期',
    'value-format': 'YYYY-MM-DD',
  }
  const monthRangeAttrs = {
    type: 'monthrange',
    'range-separator': '至',
    'start-placeholder': '开始月份',
    'end-placeholder': '结束月份',
    'value-format': 'YYYY-MM',
  }
  const dateTimeRangeAttrs = {
    type: 'datetimerange',
    'range-separator': '至',
    'start-placeholder': '开始日期',
    'end-placeholder': '结束日期',
    'value-format': 'YYYY-MM-DD HH:mm:ss',
  }

  const attrsMap = {
    date: dateAttrs,
    month: monthAttrs,
    year: yearAttrs,
    week: weekAttrs,
    dateTime: dateTimeAttrs,
    dateRange: dateRangeAttrs,
    monthRange: monthRangeAttrs,
    dateTimeRange: dateTimeRangeAttrs,
  }

  const $attrs = computed(() => {
    let result = {}

    let itemAttr = item.attr || {}

    let typeAttr = attrsMap[elementType]

    result = Object.assign({}, defaultAttrs, typeAttr, itemAttr)

    return result
  })

  return {
    $attrs,
  }
}
