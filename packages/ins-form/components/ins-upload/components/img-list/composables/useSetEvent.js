import { computed, ref } from 'vue'

/**
 * img-list useSetEvent
 * @param {formItemObject} formItem 表单项配置
 * @param {emit} emit 表单项配置
 * @returns
 */
export default function (formItem, emit) {
  let curImage = ref()
  let previewRef = ref(null)
  let previewSrcList = computed(() => formItem.attr?.fileList.map((d) => d.url) ?? [])
  /**
   *  预览图片
   * @param  {Object} file 预览点击的图片
   */
  function handlePreview(file) {
    curImage.value = file.url
    console.log('handlePreview')

    if (formItem?.attr['on-preview']) {
      // 调用 传入的 on-preview 函数
      formItem?.attr['on-preview'](file)
    } else {
      previewRef.value.clickHandler()
    }
  }

  return {
    curImage,
    previewRef,
    previewSrcList,
    handlePreview,
  }
}
