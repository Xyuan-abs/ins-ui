import { computed } from 'vue'

/**
 * 获取表单项 attrs
 * @param {*} item 表单项配置
 * @returns
 */
export default function (item) {
  let startAttr = item.attr?.[0] || {}
  let endAttr = item.attr?.[1] || {}

  const startDefaultAttrs = {
    placeholder: '请输入' + (startAttr?.label ?? ''),
  }

  const endDefaultAttrs = {
    placeholder: '请输入' + (endAttr?.label ?? ''),
  }

  const $startAttr = computed(() => Object.assign({}, startDefaultAttrs, startAttr))
  const $endAttr = computed(() => Object.assign({}, endDefaultAttrs, endAttr))

  return {
    $startAttr,
    $endAttr,
  }
}
