/**
 * 获取表单项 类型
 * @param {Object} item 表单项配置
 * @returns 表单项 类型
 */
export default function (item) {
  let elementTypeMap = {
    default: 'checkbox',
    checkbox: 'checkbox',
    borderBox: 'borderBox',
    buttonBox: 'buttonBox',
  }
  let elementType = elementTypeMap[item.elementType || 'default']

  if (!elementType) {
    console.error(`不存在${item.elementType}对应的组件`)
  }

  return {
    elementType,
  }
}
