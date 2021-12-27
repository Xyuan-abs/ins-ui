/**
 * img-list useSetEvent
 * @param {formItemObject} formItem 表单项配置
 * @param {Function} setValue 设置value
 * @param {emit} emit 表单项配置
 * @returns
 */

export default function (formItem, setValue, emit) {
  function handleRemove() {
    let fileList = formItem.attr.fileList
    let file = fileList[0]

    formItem.attr.fileList = []
    setValue()

    // 调用 传入的 on-remove 函数
    console.log('handleRemove')

    formItem.attr?.['on-remove']?.(file, fileList)
    emit('change')
  }

  return {
    handleRemove,
  }
}
