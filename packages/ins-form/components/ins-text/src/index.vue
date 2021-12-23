<!-- 
  名称：ins-date-picker--text
  版本：1.0.0 
  作者：Xyuan
  时间：2021年11月24日15:45:25
 -->
<script setup>
import useSetText from './composables/useSetText.js'

let props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})
let { text } = useSetText(props.item)
</script>

<template>
  <span class="ins-text"> {{ text }} </span>
</template>

<style lang="scss">
.ins-text {
  white-space: pre-wrap;
}
</style>
