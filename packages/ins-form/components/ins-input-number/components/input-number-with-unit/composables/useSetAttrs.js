import { computed } from 'vue'

/**
 * 获取表单项 attrs
 * @param {*} item 表单项配置
 * @returns
 */
export default function (item) {
  const inputDefaultAttrs = {
    placeholder: '请输入' + (item.attr?.[0]?.label ?? ''),
  }

  const unitDefaultAttrs = {
    placeholder: '单位',
    clearable: false,
  }

  const $inputAttrs = computed(() => Object.assign({}, inputDefaultAttrs, item.attr?.[0] || {}))
  const $unitAttrs = computed(() => Object.assign({}, unitDefaultAttrs, item.attr?.[1] || {}))

  return {
    $inputAttrs,
    $unitAttrs,
  }
}
