import { computed } from 'vue'

/**
 * 获取表单项 attrs
 * @param {*} item 表单项配置
 * @returns
 */
export default function (item) {
  const defaultAttrs = {}
  const $attrs = computed(() => Object.assign({}, defaultAttrs, item.attr || {}))

  return {
    $attrs,
  }
}
