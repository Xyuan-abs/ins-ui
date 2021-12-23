import { computed } from 'vue'

/**
 * 获取表单项 attrs
 * @param {*} item 表单项配置
 * @param {*} elementType 表单项类型
 * @returns
 */
export default function (item, elementType) {
  const defaultAttrs = {
    clearable: true,
    placeholder: '请选择' + (item.label ?? ''),
  }
  const $attrs = computed(() => Object.assign({}, defaultAttrs, item.attr || {}))

  return {
    $attrs,
  }
}
