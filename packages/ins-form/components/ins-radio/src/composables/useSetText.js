import { getLabelByValue } from '../../../../utils/index.js'

/**
 * 获取表单项 类型
 * @param {Object} item 表单项配置
 * @returns 表单项 类型
 */
export default function (item) {
  let result = ''

  let options = item.options
  let value = item.value

  result = getLabelByValue(value, options)

  return result
}
