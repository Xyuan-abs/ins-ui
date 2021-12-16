import { computed } from 'vue'

/**
 * 获取表单项 attrs
 * @param {*} item 表单项配置
 * @returns
 */
export default function (item) {
  let startRules = computed(() => {
    return setRules(0)
  })
  let endRules = computed(() => {
    return setRules(1)
  })
  function setRules(index) {
    let attr = item.attr?.[index] ?? {}
    let rules = item.rules?.[index] ?? []

    if (item.required) {
      rules.push({
        required: true,
        message: `请输入${attr.label || ''}`,
        trigger: 'blur',
      })
    }

    return rules
  }

  return {
    startRules,
    endRules,
  }
}
