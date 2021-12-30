/**
 * 格式化 required rules
 * @returns
 */
export default function () {
  function setRules(formItem) {
    let rules = formItem.rules

    if (rules) {
      let requiredRule = rules.find((d) => d.required)
      if (requiredRule && !requiredRule.message) {
        if (formItem.isSlot) {
          requiredRule.message = formItem.label + '不能为空'
        } else {
          let message = '请选择'
          if (formItem.element === 'input' || formItem.element === 'inputNumber') {
            message = '请输入'
          }
          if (formItem.element === 'upload') {
            message = '请上传'
          }
          requiredRule.message = message + formItem.label
        }
      }
    }

    return rules
  }

  return {
    setRules,
  }
}
