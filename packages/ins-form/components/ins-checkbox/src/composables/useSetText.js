import getLabelByValue from '../../../../utils/index.js'

/**
 * 获取表单项 类型
 * @param {Object} item 表单项配置
 * @returns 表单项 类型
 */
export default function (item) {
  let result = ''

  let option = item.option
  let values = item.value

  result = values
    ?.map((value) => {
      return getLabelByValue(value, option)
    })
    .join('、')

  return result
}
