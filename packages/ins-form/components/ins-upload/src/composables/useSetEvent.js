import { ElMessage } from 'element-plus'

/**
 * useSetEvent
 * @param {formItemObject} formItem 表单项配置
 * @param {Function} setValue 设置value
 * @param {emit} emit 表单项配置
 * @returns
 */
export default function (formItem, setValue, emit) {
  /**
   * change事件
   * @param {*} files
   * @param {*} fileList
   */
  function handleChange(file, fileList) {
    // 控制 只有获取到文件时 才赋值给fileList
    if (file.status === 'ready') {
      formItem.attr.fileList = fileList
      setValue()
    }

    // 调用 传入的 on-change 函数
    console.log('handleChange')

    formItem.attr?.['on-change']?.(file, fileList)
  }

  /**
   * 超出最大值
   * @param {Array} files
   * @param {Array} fileList
   */
  function handleExceed(files, fileList) {
    if (formItem?.attr['on-exceed']) {
      // 调用 传入的 on-exceed 函数
      formItem?.attr['on-exceed'](files, fileList)
    } else {
      // 默认提示
      let limit = formItem.attr?.limit
      if (limit) {
        ElMessage.warning(`最多选择${limit}个文件`)
      }
    }
  }

  /**
   * 上传成功
   * @param {*} response
   * @param {*} file
   * @param {*} fileList
   */
  function handleSuccess(response, file, fileList) {
    // 上传成功赋值
    fileList.forEach((fileListItem) => {
      fileListItem.fileUrl = formatterUrl(fileListItem, formItem)
    })
    formItem.attr.fileList = fileList
    setValue()

    // 调用 传入的 on-success 函数
    console.log('handleSuccess')

    formItem.attr?.['on-success']?.(response, file, fileList)
    emit('change')
  }

  /**
   * 上传失败
   * @param {*} err
   * @param {*} file
   * @param {*} fileList
   */
  function handleError(err, file, fileList) {
    //上传失败赋值
    formItem.attr.fileList = fileList
    setValue()

    // 调用 传入的 on-error 函数
    console.log('handleError')

    formItem.attr?.['on-error']?.(err, file, fileList)
  }

  /**
   * 删除文件
   * @param {File} file
   * @param {Array} fileList
   */
  function handleRemove(file, fileList) {
    // 删除赋值
    formItem.attr.fileList = fileList
    setValue()

    // 调用 传入的 on-remove 函数
    console.log('handleRemove')

    formItem.attr?.['on-remove']?.(file, fileList)
    emit('change')
  }

  return {
    handleChange,
    handleExceed,
    handleSuccess,
    handleError,
    handleRemove,
  }
}

/**
 * 上传成功后  格式化 文件 url
 * @param {fileListItemObject} fileListItem
 * @param {formItemObject} formItem
 * @returns fileUrl
 */
function formatterUrl(fileListItem, formItem) {
  let fileUrl = fileListItem.url
  if (fileListItem.response) {
    fileUrl = formItem.formatterValue?.(fileListItem) || fileListItem.response
  }

  return fileUrl
}
