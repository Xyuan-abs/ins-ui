import { computed } from 'vue'

/**
 * 获取表单项 attrs
 * @param {*} formItem 表单项配置
 * @returns
 */
export default function (formItem) {
  const defaultAttrs = {}
  const $attrs = computed(() => Object.assign({}, defaultAttrs, formItem.attr || {}))

  return {
    $attrs,
  }
}
