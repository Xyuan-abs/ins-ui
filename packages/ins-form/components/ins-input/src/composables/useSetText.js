/**
 * 获取表单项 类型
 * @param {Object} item 表单项配置
 * @returns 表单项 类型
 */
export default function (item) {
  function getText() {
    return item.value
  }
  return {
    getText,
  }
}
