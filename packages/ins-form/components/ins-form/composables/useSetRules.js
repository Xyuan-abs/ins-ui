/**
 * 格式化 required rules
 * @returns
 */
export default function () {
  function setRules(item) {
    let rules = item.rules

    if (rules) {
      let requiredRule = rules.find((d) => d.required)
      if (requiredRule && !requiredRule.message) {
        let message =
          item.element === 'input' || item.element === 'inputNumber' ? '请输入' : '请选择'
        requiredRule.message = message + item.label
      }
    }

    return rules
  }

  return {
    setRules,
  }
}
