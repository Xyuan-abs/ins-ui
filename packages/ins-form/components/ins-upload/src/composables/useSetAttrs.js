import { computed } from 'vue'

const defaultAttrs = {
  multiple: true,
}

const imgListAttrs = {
  'list-type': 'picture-card',
  accept: 'image/*',
}

const dragImgAttrs = {
  drag: true,
  'list-type': 'picture-card',
  'show-file-list': false,
  accept: 'image/*',
}

const attrsMap = {
  imgList: imgListAttrs,
  dragImg: dragImgAttrs,
}

/**
 * 获取表单项 attrs
 * @param {*} formItem 表单项配置
 * @returns
 */
export default function (formItem) {
  const $attrs = computed(() => {
    let result = {}

    let typeAttr = attrsMap[formItem.elementType]
    let formItemAttr = Object.assign({}, formItem.attr || {})

    result = Object.assign({}, defaultAttrs, typeAttr, formItemAttr)

    return result
  })

  return {
    $attrs,
  }
}
