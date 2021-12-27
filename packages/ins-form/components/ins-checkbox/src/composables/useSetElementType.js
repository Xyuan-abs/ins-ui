/**
 * 获取表单项 类型
 * @param {Object} formItem 表单项配置
 * @returns 表单项 类型
 */
export default function (formItem) {
  let elementTypeMap = {
    default: 'checkbox',
    checkbox: 'checkbox',
    borderBox: 'borderBox',
    buttonBox: 'buttonBox',
  }
  let elementType = elementTypeMap[formItem.elementType || 'default']

  if (!elementType) {
    console.error(`不存在${formItem.elementType}对应的组件`)
  }

  return {
    elementType,
  }
}
