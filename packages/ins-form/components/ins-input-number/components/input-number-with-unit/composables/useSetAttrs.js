import { computed } from 'vue'

/**
 * 获取表单项 attrs
 * @param {*} formItem 表单项配置
 * @returns
 */
export default function (formItem) {
  const inputDefaultAttrs = {
    placeholder: '请输入' + (formItem.attr?.[0]?.label ?? ''),
  }

  const unitDefaultAttrs = {
    placeholder: '单位',
    clearable: false,
  }

  const $inputAttrs = computed(() => Object.assign({}, inputDefaultAttrs, formItem.attr?.[0] || {}))
  const $unitAttrs = computed(() => Object.assign({}, unitDefaultAttrs, formItem.attr?.[1] || {}))

  return {
    $inputAttrs,
    $unitAttrs,
  }
}
