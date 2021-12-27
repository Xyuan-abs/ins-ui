import { computed } from 'vue'

/**
 * 获取表单项 attrs
 * @param {*} formItem 表单项配置
 * @returns
 */
export default function (formItem) {
  let startAttr = formItem.attr?.[0] || {}
  let endAttr = formItem.attr?.[1] || {}

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
