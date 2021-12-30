/**
 * 设置表单项 样式
 * @returns
 */
export default function () {
  // 设置 表单项 宽度
  const setFormItemWidth = (cols, formItem) => {
    let width = '100%'
    let { col } = formItem

    // 参数格式校验
    if (cols && typeof cols !== 'number') {
      console.error('cols must be a Number')
      return
    }
    if (col && typeof col !== 'number') {
      console.error('formItem.col must be a Number')
      return
    }
    // 栅格化
    if (cols && col) {
      width = ((col / cols) * 100).toFixed(2) + '%'
    }

    return width
  }

  // 设置 表单项 内部容器 宽度
  const setFormItemInnerWidth = (formItem) => {
    let _width = '100%'
    let { width } = formItem

    // 参数格式校验
    if (width && typeof width !== 'number' && typeof width !== 'string') {
      console.error('width must be a Number or a String')
      return
    }

    // 指定宽度
    if (width) {
      _width = typeof width === 'number' ? width + 'px' : width
    }

    return _width
  }

  return {
    setFormItemWidth,
    setFormItemInnerWidth,
  }
}
