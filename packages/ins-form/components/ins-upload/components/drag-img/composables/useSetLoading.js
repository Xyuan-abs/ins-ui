import { computed } from 'vue'

/**
 * 获取表单项 类型
 * @param {Object} formItem 表单项配置
 */
export default function (formItem, emit) {
  let loading = computed(() => {
    let flag = false

    let fileList = formItem.attr?.fileList ?? []
    let file = fileList[fileList.length - 1]
    if (file?.status === 'ready') {
      flag = true
    }
    if (file?.status === 'success' || file?.status === 'error') {
      flag = false
    }
    return flag
  })

  let percentage = computed(() => {
    let fileList = formItem.attr?.fileList ?? []
    let file = fileList[fileList.length - 1]

    return file?.percentage
  })

  return {
    loading,
    percentage,
  }
}
