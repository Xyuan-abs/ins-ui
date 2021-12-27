import { ref } from 'vue'

/**
 * 获取表单项 类型
 * @param {Object} formItem 表单项配置
 * @param {emit} emit 表单项配置
 */
export default function (formItem, emit) {
  function setValue() {
    console.log('useSetModel')
    let selectValue = ref(formItem.value)

    // fileUrl -> 通过 formatterValue 得到的 fileUrl
    // url -> 数据回显时 fileListItem 的  url
    selectValue.value = formItem.attr.fileList.map((d) => d.fileUrl || d.url)
    emit('update:modelValue', selectValue)
  }

  return {
    setValue,
  }
}
