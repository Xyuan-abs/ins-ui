import { computed, ref } from 'vue'

/**
 * 获取表单项 类型
 * @param {Object} formItem 表单项配置
 * @param {emit} emit 表单项配置
 */
export default function (formItem, emit) {
  function setValue() {
    console.log('useSetModel')

    let selectValue = ref(formItem.value)
    let fileList = formItem.attr.fileList

    if (fileList.length > 1) {
      fileList.splice(0, 1)
    }

    // fileUrl -> 通过 formatterValue 得到的 fileUrl
    // url -> 数据回显时 fileListItem 的  url
    selectValue.value = fileList.map((d) => d.fileUrl || d.url)?.[0]
    emit('update:modelValue', selectValue)
  }

  let file = computed(() => {
    return formItem.attr.fileList[0]
  })

  return {
    file,
    setValue,
  }
}
