<!-- 
  名称：ins-text__drag-img
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

let img = computed(() => props.formItem.attr.fileList?.[0]?.url)
</script>

<template>
  <div class="ins-text__drag-img">
    <el-image class="img-box" :src="img" fit="cover" :preview-src-list="[img]"></el-image>
  </div>
</template>

<style lang="scss">
.ins-text__drag-img {
  .img-box {
    width: 360px;
    height: 180px;

    margin-top: 12px;
    margin-right: 12px;
  }
}
</style>
