<!-- 
  名称：ins-upload__drag-img
  版本：1.0.0 
  作者：Xyuan
  时间：2021年12月23日15:17:02
 -->
<script setup>
import useSetAttrs from '../../src/composables/useSetAttrs.js'
import useSetEvent from '../../src/composables/useSetEvent.js'

import useSetDragImgModel from './composables/useSetModel.js'
import useSetDragImgEvent from './composables/useSetEvent.js'
import useSetDragImgLoading from './composables/useSetLoading.js'

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
let { file, setValue } = useSetDragImgModel(props.formItem, emit)

/* 事件 */
let { handleSuccess, handleError, handleChange } = useSetEvent(props.formItem, setValue, emit)
let { handleRemove } = useSetDragImgEvent(props.formItem, setValue, emit)

/* 加载状态 */
let { loading } = useSetDragImgLoading(props.formItem)
</script>

<template>
  <div class="ins-upload__drag-img">
    <!-- upload -->
    <el-upload
      ref="uploadRef"
      v-bind="$attrs"
      :limit="0"
      :on-change="handleChange"
      :on-success="handleSuccess"
      :on-error="handleError"
    >
      <div v-loading="loading" class="el-upload-dragger__inner">
        <!-- 未上传 -->
        <div v-if="!file" class="el-upload-dragger__before-upload center-abs">
          <el-icon :size="67">
            <upload-filled />
          </el-icon>
          <div class="el-upload__text">将图片拖到此处，或<em>点击上传</em></div>
        </div>

        <!-- 已上传 -->
        <template v-else>
          <img class="img-thumbnail" :src="file.url" alt="" />
          <span class="img-thumbnail__del" @click.stop="handleRemove">delete</span>
        </template>
      </div>

      <!-- tip -->
      <template #tip>
        <div class="el-upload__tip">只能上传 jpg/png 文件，且不超过 500kb</div>
      </template>
    </el-upload>
  </div>
</template>

<style lang="scss">
.ins-upload__drag-img {
  .el-upload {
    border: none;
    width: auto;
    height: auto;
    .el-upload-dragger {
      position: relative;
      .el-upload-dragger__inner {
        position: relative;
        width: 100%;
        height: 100%;
        .el-upload-dragger__before-upload {
          .el-icon {
            font-size: 67px;
            color: var(--el-text-color-placeholder);
            margin-top: -10px;
          }
        }

        .img-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .img-thumbnail__del {
          display: none;
          position: absolute;
          top: 5px;
          right: 5px;
          font-size: 12px;
          cursor: pointer;
          opacity: 1;
          line-height: 1.2;
          color: var(--el-color-primary);
        }
        &:hover {
          .img-thumbnail__del {
            display: block;
          }
        }
      }
    }
  }
}
</style>
