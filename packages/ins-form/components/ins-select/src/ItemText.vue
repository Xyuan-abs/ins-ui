<!-- 
  名称：ins-select--text
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
let { getText } = useSetText(props.item)
</script>

<template>
  <span class="ins-text">
    {{ getText() }}
  </span>
</template>
