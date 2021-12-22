/**
 * 根据value获取label
 * @param { String|Number} value
 * @param {Array} options
 * @returns
 */
export function getLabelByValue(value, options) {
  return options.find((d) => d.value === value)?.label ?? value
}
