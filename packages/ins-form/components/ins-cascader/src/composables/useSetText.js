/**
 * 获取表单项 类型
 * @param {Object} formItem 表单项配置
 * @returns 表单项 类型
 */
export default function (formItem) {
  // 判断 formItem.value 是否为数组
  if (!isValueArray(formItem.value)) return

  // 将 值 统一为 数组
  let valueList = format2Mult(formItem.value)

  // 根据value获取labels
  let result = getLabels(valueList, formItem.options)

  return result
}

/**
 * 判断formItem.value是否为数组
 * @param {Array} value
 * @returns
 */
function isValueArray(value) {
  let isArray = Object.prototype.toString.call(value) === '[object Array]'
  if (!isArray) {
    console.error('cascader的value必须是个数组')
  }
  return isArray
}

/**
 * 将value转换成多选的数据格式
 * @param {Array} value
 * @returns
 */
function format2Mult(value) {
  let isMult = Object.prototype.toString.call(value?.[0]) === '[object Array]'
  let multValue = isMult ? value : [value]

  return multValue
}

/**
 * 根据value获取label
 * @param {Array} valueList
 * @param {Array} options
 * @returns labels
 */
function getLabels(valueList, options) {
  let result = valueList
    .map((values) => {
      let i = 0
      let _options = options
      let labeList = []

      while (i < values.length) {
        let _value = values[i]
        let _item = _options.find((d) => d.value === _value)

        if (!_item) {
          console.error(`没有找到${_value}对应的optionItem`)
          break
        }

        _options = _item.children
        labeList.push(_item.label)
        i++
      }

      return labeList.join('/')
    })
    .join('\n')

  return result
}
