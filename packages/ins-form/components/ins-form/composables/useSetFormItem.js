/**
 * 设置表单项 样式
 * @returns
 */
export default function () {
  return {
    setStyle,
  }
}

/**
 * 设置 style
 * @param {Number} cols 总共的列数
 * @param {FormItemObject} formItem 表单项配置对象
 * @returns style
 */
function setStyle(cols, formItem) {
  let { col, width } = formItem
  let style = {}

  /* 设置宽度 */
  let _width = setWidth(cols, col, width)
  Object.assign(style, { width: _width })

  return style
}

/**
 * 设置宽度
 * @param {Number} cols 总共的列数
 * @param {Number} col 占几列
 * @param {Number|String} width 指定宽度
 * @returns _width
 */
function setWidth(cols, col, width) {
  // 参数格式校验
  if (cols && typeof cols !== 'number') {
    console.error('cols must be a Number')
    return
  }
  if (col && typeof col !== 'number') {
    console.error('formItem.col must be a Number')
    return
  }
  if (width && typeof width !== 'number' && typeof width !== 'string') {
    console.error('width must be a Number or a String')
    return
  }

  let _width = '100%'

  if (cols) {
    // 栅格化
    if (cols && col) {
      _width = ((col / cols) * 100).toFixed(2) + '%'
    }
  } else {
    // 指定宽度
    if (width) {
      _width = typeof width === 'number' ? width + 'px' : width
    }
  }

  return _width
}
