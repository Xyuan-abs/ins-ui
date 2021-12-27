import { computed } from 'vue'

/**
 * 获取表单项 attrs
 * @param {*} formItem 表单项配置
 * @param {*} elementType 表单项类型
 * @returns
 */
export default function (formItem, elementType) {
  const defaultAttrs = {}

  /* radio-group */
  const $groupAttrs = computed(() => {
    let result = {}
    let formItemAttr = formItem.attr || {}

    result = Object.assign({}, defaultAttrs, formItemAttr)

    return result
  })

  /* radio */
  const radioAttrsMap = {
    borderBox: {
      border: true,
    },
  }
  function setRadioAttrs(option) {
    let result = {}
    let formItemAttr = option.attr || {}
    let typeAttr = radioAttrsMap[elementType]

    result = Object.assign({}, defaultAttrs, typeAttr, formItemAttr)

    return result
  }

  return {
    $groupAttrs,
    setRadioAttrs,
  }
}
