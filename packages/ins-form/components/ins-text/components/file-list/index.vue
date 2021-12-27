<!-- 
  名称：ins-text__file-list
  版本：1.0.0 
  作者：Xyuan
  时间：2021年11月24日15:45:25
 -->
<script setup>
import { computed } from 'vue'

let props = defineProps({
  formItem: {
    type: Object,
    default: () => {},
  },
})

let fileList = computed(() => props.formItem.attr.fileList?.map((d) => d) ?? [])
</script>

<template>
  <div class="ins-text__file-list">
    <p v-for="(img, i) in fileList" :key="i">
      <el-icon>
        <document />
      </el-icon>
      <a class="ellipsis" :href="img.url" :preview-src-list="fileList" target="__blank">
        {{ img.name }}
      </a>
    </p>
  </div>
</template>

<style lang="scss">
.ins-text__file-list {
  white-space: pre-wrap;
  line-height: inherit;
  p {
    display: flex;
    align-items: center;
    line-height: inherit;
    color: var(--el-text-color-regular);
    i {
      font-size: 16px;
      line-height: 1.2;
      margin-right: 2px;
    }
    &:hover {
      color: var(--el-color-primary);
      a {
        color: var(--el-color-primary);
      }
    }
    a {
      color: var(--el-text-color-regular);
      font-weight: 500;
      text-decoration: none;
      overflow-wrap: break-word;
    }
  }
}
</style>
