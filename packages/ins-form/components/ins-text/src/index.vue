<!-- 
  名称：ins-text
  版本：1.0.0 
  作者：Xyuan
  时间：2021年11月24日15:45:25
 -->
<script setup>
import imgList from '../components/img-list/index.vue'
import fileList from '../components/file-list/index.vue'
import dragImg from '../components/drag-img/index.vue'

import useSetElementType from './composables/useSetElementType.js'
import useSetText from './composables/useSetText.js'

let props = defineProps({
  formItem: {
    type: Object,
    default: () => {},
  },
})
let { text } = useSetText(props.formItem)
let { elementType } = useSetElementType(props.formItem)
</script>

<template>
  <img-list v-if="elementType === 'imgList'" :form-item="formItem" />

  <file-list v-else-if="elementType === 'fileList'" :form-item="formItem" />

  <drag-img v-else-if="elementType === 'dragImg'" :form-item="formItem" />

  <span v-else class="ins-text"> {{ text }} </span>
</template>

<style lang="scss">
.ins-text {
  white-space: pre-wrap;
}
</style>
