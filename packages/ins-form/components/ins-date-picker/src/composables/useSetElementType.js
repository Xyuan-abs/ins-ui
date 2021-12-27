/**
 * 获取表单项 类型
 * @param {Object} formItem 表单项配置
 * @returns 表单项 类型
 */
export default function (formItem) {
  let elementTypeMap = {
    default: 'date',
    date: 'date',
    month: 'month',
    year: 'year',
    week: 'week',
    dateTime: 'dateTime',
    dateRange: 'dateRange',
    monthRange: 'monthRange',
    dateTimeRange: 'dateTimeRange',
  }
  let elementType = elementTypeMap[formItem.elementType || 'default']

  if (!elementType) {
    console.error(`不存在${formItem.elementType}对应的组件`)
  }

  return {
    elementType,
  }
}
