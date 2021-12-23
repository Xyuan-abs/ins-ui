import { computed } from 'vue'

/**
 * 获取表单项 attrs
 * @param {*} item 表单项配置
 * @param {*} elementType 表单项类型
 * @returns
 */
export default function (item, elementType) {
  const defaultAttrs = {}

  /* radio-group */
  const $groupAttrs = computed(() => {
    let result = {}
    let itemAttr = item.attr || {}

    result = Object.assign({}, defaultAttrs, itemAttr)

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
    let itemAttr = option.attr || {}
    let typeAttr = radioAttrsMap[elementType]

    result = Object.assign({}, defaultAttrs, typeAttr, itemAttr)

    return result
  }

  return {
    $groupAttrs,
    setRadioAttrs,
  }
}
