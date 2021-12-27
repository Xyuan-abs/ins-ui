import { computed } from 'vue'

/**
 * 获取表单项 attrs
 * @param {*} formItem 表单项配置
 * @param {*} elementType 表单项类型
 * @returns
 */
export default function (formItem, elementType) {
  const defaultAttrs = {
    clearable: true,
    placeholder: '请选择' + (formItem.label ?? ''),
  }
  const $attrs = computed(() => Object.assign({}, defaultAttrs, formItem.attr || {}))

  return {
    $attrs,
  }
}
