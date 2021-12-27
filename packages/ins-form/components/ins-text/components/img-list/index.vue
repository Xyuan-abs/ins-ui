<!-- 
  名称：ins-text__img-list
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

let imgList = computed(() => props.formItem.attr.fileList?.map((d) => d.url) ?? [])
</script>

<template>
  <div class="ins-text__img-list">
    <el-image
      v-for="(img, i) in imgList"
      :key="i"
      class="img-box"
      :src="img"
      :preview-src-list="imgList"
    ></el-image>
  </div>
</template>

<style lang="scss">
.ins-text__img-list {
  white-space: pre-wrap;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row wrap;

  .img-box {
    width: 150px;
    height: 150px;
    object-fit: scale-down;
    margin-top: 12px;
    margin-right: 12px;
  }
}
</style>
