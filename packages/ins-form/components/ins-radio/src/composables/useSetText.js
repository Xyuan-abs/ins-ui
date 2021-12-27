import { getLabelByValue } from '../../../../utils/index.js'

/**
 * 获取表单项 类型
 * @param {Object} formItem 表单项配置
 * @returns 表单项 类型
 */
export default function (formItem) {
  let result = ''

  let options = formItem.options
  let value = formItem.value

  result = getLabelByValue(value, options)

  return result
}
