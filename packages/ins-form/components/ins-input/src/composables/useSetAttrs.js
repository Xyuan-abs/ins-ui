import { computed } from 'vue'

/**
 * 获取表单项 attrs
 * @param {*} item 表单项配置
 * @param {*} elementType 表单项类型
 * @returns
 */
export default function (item, elementType) {
  const defaultAttrs = {
    clearable: true,
    placeholder: '请输入' + (item.label ?? ''),
  }
  const inputAttrs = {
    type: 'text',
  }
  const textareaAttrs = {
    type: 'textarea',
    'show-word-limit': true,
    autosize: { minRows: 4, maxRows: 6 },
  }
  const attrsMap = {
    input: inputAttrs,
    textarea: textareaAttrs,
  }

  const $attrs = computed(() => {
    let result = {}

    let itemAttr = item.attr || {}

    let typeAttr = attrsMap[elementType]

    result = Object.assign({}, defaultAttrs, typeAttr, itemAttr)

    return result
  })

  return {
    $attrs,
  }
}
