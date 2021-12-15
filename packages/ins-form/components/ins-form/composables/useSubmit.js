/**
 * 整合表单值、提交、重置
 * @param {*} ruleFormRef 表单ref实例
 * @param {*} dynamicForm 动态表单配置对象
 * @param {*} emit
 * @returns
 */
export default function (ruleFormRef, dynamicForm, emit) {
  /**
   * 转换表单 到 保存数据
   * hidden=true 和 show=false 的区别
   *   hidden不展示/不生成值，show不展示/生成值
   */
  function toSaveData() {
    let result = {}

    ruleFormRef.value.validate((valid) => {
      if (valid) {
        dynamicForm?.form.forEach((d) => {
          // 隐藏的 不生成属性值
          if (d.hidden) return
          // secbar 表单项 不生成属性值
          if (d.element === 'secbar') return

          let value = d.value
          //值的格式化
          typeof d.value === 'string' && (value = d.value.trim())
          d.value === undefined && (value = '')

          result[d.name] = value
        })
      } else {
        result = {}
      }
    })

    return Object.keys(result).length > 0 && result
  }

  // 提交表单
  function submitForm() {
    const result = toSaveData()
    console.log('submitForm', result)
    result && emit('save', result)
  }

  // 重置表单
  function resetForm() {
    ruleFormRef.value.resetFields()
    emit('reset')
  }

  return {
    toSaveData,
    submitForm,
    resetForm,
  }
}
