import { computed } from 'vue'

/**
 * 获取表单项 attrs
 * @param {*} formItem 表单项配置
 * @returns
 */
export default function (formItem) {
  let inputRules = computed(() => {
    return setRules(0)
  })
  let unitRules = computed(() => {
    return setRules(1)
  })
  function setRules(index) {
    let attr = formItem.attr?.[index] ?? {}
    let rules = formItem.rules?.[index] ?? []

    if (formItem.required) {
      rules.push({
        required: true,
        message: `请输入${attr.label || ''}`,
        trigger: index ? 'change' : 'blur',
      })
    }

    return rules
  }

  return {
    inputRules,
    unitRules,
  }
}
