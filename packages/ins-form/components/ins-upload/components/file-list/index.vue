<!-- 
  名称：ins-upload__file-list
  版本：1.0.0 
  作者：Xyuan
  时间：2021年12月23日15:17:02
 -->
<script setup>
import useSetAttrs from '../../src/composables/useSetAttrs.js'
import useSetModel from '../../src/composables/useSetModel.js'
import useSetEvent from '../../src/composables/useSetEvent.js'

let props = defineProps({
  formItem: {
    type: Object,
    default: () => {},
  },
  modelValue: {
    type: [String, Number, Array],
    default: '',
  },
})
let emit = defineEmits(['update:modelValue', 'change'])

/* attr */
let { $attrs } = useSetAttrs(props.formItem)

/* 值的双向绑定 */
let { setValue } = useSetModel(props.formItem, emit)

/* 事件 */
let { handleChange, handleExceed, handleSuccess, handleError, handleRemove } = useSetEvent(
  props.formItem,
  setValue,
  emit
)

/* 值的双向绑定 -- end */
</script>

<template>
  <div class="ins-upload__file-list">
    <!-- 组件 -->
    <el-upload
      class="upload-demo"
      v-bind="$attrs"
      :on-change="handleChange"
      :on-success="handleSuccess"
      :on-error="handleError"
      :on-exceed="handleExceed"
      :on-remove="handleRemove"
    >
      <el-button type="primary">点击上传</el-button>
      <template #tip>
        <div class="el-upload__tip">{{ formItem.tip }}</div>
      </template>
    </el-upload>
  </div>
</template>

<style lang="scss">
.ins-upload__file-list {
  .el-upload-list {
    margin-top: 5px;
    .el-upload-list__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 0;
      margin: 0;
      > i {
        margin-top: 2px;
      }
    }
  }

  .el-upload__tip {
    margin-top: 10px;
  }
}
</style>
