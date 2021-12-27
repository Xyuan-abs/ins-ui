<!-- 
  名称：ins-upload__img-list
  版本：1.0.0 
  作者：Xyuan
  时间：2021年12月23日15:17:02
 -->
<script setup>
import useSetAttrs from '../../src/composables/useSetAttrs.js'
import useSetModel from '../../src/composables/useSetModel.js'
import useSetEvent from '../../src/composables/useSetEvent.js'

import useSetImgListEvent from './composables/useSetEvent.js'

let props = defineProps({
  formItem: {
    type: Object,
    default: () => {},
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
})
let emit = defineEmits(['update:modelValue', 'change'])

/* attr */
let { $attrs } = useSetAttrs(props.formItem)

/* 值的双向绑定 */
let { setValue } = useSetModel(props.formItem, emit)

/* 事件 */
let { handleExceed, handleChange, handleSuccess, handleError, handleRemove } = useSetEvent(
  props.formItem,
  setValue,
  emit
)
let { curImage, previewRef, previewSrcList, handlePreview } = useSetImgListEvent(props.formItem)
</script>

<template>
  <div class="ins-upload__img-list">
    <!-- upload -->
    <el-upload
      v-bind="$attrs"
      :on-preview="handlePreview"
      :on-change="handleChange"
      :on-success="handleSuccess"
      :on-error="handleError"
      :on-exceed="handleExceed"
      :on-remove="handleRemove"
    >
      <!-- 加号图标 -->
      <el-icon> <plus /> </el-icon>
    </el-upload>

    <!-- tip -->
    <p v-if="formItem.tip" class="ins-upload__tip">{{ formItem.tip }}</p>

    <!-- 利用 el-image 实现预览-->
    <el-image
      ref="previewRef"
      :src="curImage"
      class="preview-img"
      :preview-src-list="previewSrcList"
    ></el-image>
  </div>
</template>

<style lang="scss">
.ins-upload__img-list {
  .el-upload-list {
    display: inline-block;
    margin-top: -8px;
    line-height: 0.8;

    .el-upload-list__item {
      margin-top: 8px;
      margin-bottom: 0;

      .el-upload-list__item-actions {
        i {
          display: none;
          cursor: pointer;
        }
        i + i {
          margin-left: 15px;
        }
        &:hover {
          i {
            display: inline-block;
          }
        }
      }
    }
  }

  .ins-upload__tip {
    font-size: 12px;
    color: var(--el-text-color-regular);
    margin-top: 8px;
  }
  .preview-img {
    position: absolute;
    left: -99999999999px;
    width: 100px;
    height: 100px;
  }
}
</style>
