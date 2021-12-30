import { computed } from 'vue'

/**
 * 获取表单项 attrs
 * @param {*} formItem 表单项配置
 * @param {*} elementType 表单项类型
 * @returns
 */
export default function (formItem, elementType) {
  const defaultAttrs = {
    clearable: true,
    placeholder: '请输入' + (formItem.label ?? ''),
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

    let formItemAttr = formItem.attr || {}

    let typeAttr = attrsMap[elementType]

    result = Object.assign({}, defaultAttrs, typeAttr, formItemAttr)

    return result
  })

  return {
    $attrs,
  }
}
