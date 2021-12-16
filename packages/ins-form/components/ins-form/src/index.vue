<!-- 
  名称：表单 动态
  版本：1.0.0 
  作者：Xyuan
  时间：2021年11月3日14:47:35
 -->
<script setup>
import { ref } from 'vue'
import InsInput from '../../ins-input'
import InsInputNumber from '../../ins-input-number'
import InsSelect from '../../ins-select'
import InsDatePicker from '../../ins-date-picker'

import useSetAttrs from '../composables/useSetAttrs'
import useSetFormItem from '../composables/useSetFormItem'
import useSubmit from '../composables/useSubmit'
import useSetRules from '../composables/useSetRules'

let props = defineProps({
  hasSubmit: {
    type: Boolean,
    default: true,
  },
  submitText: {
    type: String,
    default: '提交',
  },
  dynamicForm: {
    type: Object,
    default: () => {},
  },
  cols: {
    type: Number,
    default: null,
  },
})
let emit = defineEmits(['change', 'save', 'reset'])

// 属性
let { $attrs } = useSetAttrs()

// 表单项配置
let { setStyle } = useSetFormItem(props.cols)

// 表单项配置
let { setRules } = useSetRules(props.cols)

// 提交、重置
let ruleFormRef = ref(null)
let { toSaveData, submitForm, resetForm } = useSubmit(ruleFormRef, props.dynamicForm, emit)

// 表单项值变化时间
function change(item) {
  emit('change', item)
}

// 暴露出去的 属性和方法
defineExpose({
  toSaveData,
})
</script>

<template>
  <div class="ins-form">
    <el-form
      v-if="dynamicForm"
      ref="ruleFormRef"
      :model="dynamicForm"
      class="el-form-dynamic"
      v-bind="$attrs"
    >
      <template v-for="(item, index) in dynamicForm.form">
        <!-- 自定义表单项 插槽 -->
        <slot v-if="item.isSlot === true" :name="item.name" :item="item" :index="index" />

        <!-- 自定义表单项 动态组件 -->
        <component
          :is="item.component"
          v-else-if="item.component"
          :key="`form-item-${index}`"
          :item="item"
        />

        <!-- 其他 表单项 -->
        <el-form-item
          v-else
          v-show="item.show !== false"
          :key="`form-item-${item.name}`"
          class="form-item"
          :prop="item.required ? undefined : 'form[' + index + '].value'"
          :label="item.label"
          :rules="setRules(item)"
          :required="item.required"
          :style="setStyle(cols, item)"
        >
          <!-- input -->
          <ins-input
            v-if="item.element === 'input'"
            v-model:modelValue="item.value"
            :item="item"
            @change="change(item)"
          />

          <!-- input-number -->
          <ins-input-number
            v-if="item.element === 'inputNumber'"
            v-model:modelValue="item.value"
            :item="item"
            :index="index"
            @change="change(item)"
          />

          <!-- ins-select -->
          <ins-select
            v-if="item.element === 'select'"
            v-model:modelValue="item.value"
            :item="item"
            :index="index"
            @change="change(item)"
          />

          <!-- ins-date-picker -->
          <ins-date-picker
            v-if="item.element === 'datePicker'"
            v-model:modelValue="item.value"
            :item="item"
            :index="index"
            @change="change(item)"
          />
        </el-form-item>
      </template>

      <!-- 表单按钮 -->
      <el-form-item v-if="hasSubmit" class="search-btn form-item">
        <el-button type="primary" @click="submitForm">
          {{ submitText }}
        </el-button>
        <el-button @click="resetForm"> 重置 </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.ins-form {
  font-family: inherit;
  .el-form-dynamic {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row wrap;
    .form-item {
      width: 100%;
    }
  }
}
</style>
