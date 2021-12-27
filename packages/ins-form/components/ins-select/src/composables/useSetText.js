import { getLabelByValue } from '../../../../utils/index'

/**
 * 获取表单项 类型
 * @param {Object} formItem 表单项配置
 * @returns 表单项 类型
 */
export default function (formItem) {
  // 将 值 统一为 数组
  let valueType = Object.prototype.toString.call(formItem.value)
  let valueList = valueType === '[object Array]' ? formItem.value : [formItem.value]

  // 遍历 获取 值 对应的 label 用、拼接
  let result = valueList
    .map((d) => {
      let result = ''

      // 判断是否为分组
      if (formItem.elementType === 'group') {
        let options = (formItem.options ?? []).reduce(
          (prev, cur) => prev.concat(cur.options ?? []),
          []
        )
        result = getLabelByValue(d, options)
      } else {
        let options = formItem.options ?? []
        result = getLabelByValue(d, options)
      }

      return result
    })
    .join('、')

  return result
}
