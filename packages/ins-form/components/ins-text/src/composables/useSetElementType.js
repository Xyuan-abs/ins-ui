/**
 * 获取表单项 类型
 * @param {Object} formItem 表单项配置
 * @returns 表单项 类型
 */
export default function (formItem) {
  let elementType = ''

  if (formItem.element === 'upload') {
    if (formItem.elementType === 'imgList') {
      elementType = 'imgList'
    }
    if (formItem.elementType === 'fileList') {
      elementType = 'fileList'
    }
    if (formItem.elementType === 'dragImg') {
      elementType = 'dragImg'
    }
  } else {
    elementType = 'text'
  }

  return {
    elementType,
  }
}
