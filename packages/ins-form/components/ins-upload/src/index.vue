<!-- 
  名称：ins-upload
  版本：1.0.0 
  作者：Xyuan
  时间：2021年12月23日15:06:15
 -->
<script setup>
import { inject, nextTick } from 'vue'

import fileList from '../components/file-list/index.vue'
import imgList from '../components/img-list/index.vue'
import dragImg from '../components/drag-img/index.vue'

import useSetElementType from './composables/useSetElementType.js'

import { useVModel } from '@vueuse/core'

let props = defineProps({
  formItem: {
    type: Object,
    default: () => {},
  },
  modelValue: {
    type: [String, Array],
    default: '',
  },
  index: {
    type: Number,
    default: 0,
  },
})
let emit = defineEmits(['update:modelValue', 'change'])
let validateField = inject('validateField')

/* 组件类型 */
let { elementType } = useSetElementType(props.formItem)

/* 值的双向绑定 */
let uploadValue = useVModel(props, 'modelValue', emit) // 值的双向绑定

/* change事件 */
function change() {
  emit('change')
  nextTick(() => {
    validateField(`form[${props.index}].value`)
  })
}
/* 值的双向绑定 -- end */
</script>

<template>
  <div class="ins-upload">
    <!-- fileList -->
    <file-list
      v-if="elementType === 'fileList'"
      v-model:modelValue="uploadValue"
      :form-item="formItem"
      @change="change"
    />

    <!-- imgList -->
    <img-list
      v-if="elementType === 'imgList'"
      v-model:modelValue="uploadValue"
      :form-item="formItem"
      @change="change"
    />

    <!-- dragImg -->
    <drag-img
      v-if="elementType === 'dragImg'"
      v-model:modelValue="uploadValue"
      :form-item="formItem"
      @change="change"
    />
  </div>
</template>

<style lang="scss">
.ins-upload {
  .el-select {
    width: 100%;
  }
}
</style>
