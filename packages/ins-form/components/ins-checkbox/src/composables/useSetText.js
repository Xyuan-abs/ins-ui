import { getLabelByValue } from '../../../../utils/index.js'

/**
 * 获取表单项 类型
 * @param {Object} formItem 表单项配置
 * @returns 表单项 类型
 */
export default function (formItem) {
  let result = ''

  let options = formItem.options
  let values = formItem.value

  result = values
    ?.map((value) => {
      return getLabelByValue(value, options)
    })
    .join('、')

  return result
}
