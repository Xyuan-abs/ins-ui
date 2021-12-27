<!-- 
  名称：表单 动态
  版本：1.0.0 
  作者：Xyuan
  时间：2021年11月3日14:47:35
 -->
<script setup>
import { provide, ref } from 'vue'

import useSetAttrs from '../composables/useSetAttrs'
import useSetFormItem from '../composables/useSetFormItem'
import useSubmit from '../composables/useSubmit'
import useSetRules from '../composables/useSetRules'

let props = defineProps({
  dynamicForm: {
    type: Object,
    default: () => {},
  },
  hasSubmit: {
    type: Boolean,
    default: true,
  },
  submitText: {
    type: String,
    default: '提交',
  },
  cols: {
    type: Number,
    default: null,
  },
  isText: {
    type: Boolean,
    default: false,
  },
})

let emit = defineEmits(['change', 'save', 'reset'])

// 属性
let { $attrs } = useSetAttrs()

//表单项样式
let { setStyle } = useSetFormItem(props.cols)

// rules
let { setRules } = useSetRules(props.cols)

// 提交、重置
let dynamicFormRef = ref(null)
let { toSaveData, submitForm, resetForm, validateField } = useSubmit(
  dynamicFormRef,
  props.dynamicForm,
  emit
)

// 表单项值change事件
function change(formItem) {
  emit('change', formItem)
}

// 暴露出去的 属性和方法
defineExpose({
  dynamicFormRef,
  toSaveData,
  submitForm,
  resetForm,
  validateField,
})

provide('validateField', validateField)
</script>

<template>
  <el-form
    v-if="dynamicForm"
    ref="dynamicFormRef"
    :model="dynamicForm"
    class="ins-form"
    v-bind="$attrs"
  >
    <template v-for="(formItem, index) in dynamicForm.form">
      <!-- 自定义表单项 插槽 -->
      <slot
        v-if="formItem.isSlot === true"
        :name="formItem.name"
        :form-item="formItem"
        :index="index"
      />

      <!-- 自定义表单项 动态组件 -->
      <component
        :is="formItem.component"
        v-else-if="formItem.component"
        :key="`form-item-${index}`"
        :form-item="formItem"
      />

      <!-- 其他 表单项 -->
      <el-form-item
        v-else
        v-show="formItem.show !== false"
        :key="`form-item-${formItem.name}`"
        class="form-item"
        :prop="formItem.required ? undefined : 'form[' + index + '].value'"
        :label="formItem.label + (isText || formItem.isText ? ' :' : '')"
        :rules="setRules(formItem)"
        :required="formItem.required"
        :style="setStyle(cols, formItem)"
      >
        <!-- 纯文本 -->
        <ins-text v-if="isText || formItem.isText" :form-item="formItem" />
        <!-- 具体组件 -->
        <template v-else>
          <!-- input -->
          <ins-input
            v-if="formItem.element === 'input'"
            v-model:modelValue="formItem.value"
            :form-item="formItem"
            @change="change(item)"
          />

          <!-- input-number -->
          <ins-input-number
            v-if="formItem.element === 'inputNumber'"
            v-model:modelValue="formItem.value"
            :form-item="formItem"
            :index="index"
            @change="change(formItem)"
          />

          <!-- ins-select -->
          <ins-select
            v-if="formItem.element === 'select'"
            v-model:modelValue="formItem.value"
            :form-item="formItem"
            :index="index"
            @change="change(formItem)"
          />

          <!-- ins-date-picker -->
          <ins-date-picker
            v-if="formItem.element === 'datePicker'"
            v-model:modelValue="formItem.value"
            :form-item="formItem"
            :index="index"
            @change="change(formItem)"
          />

          <!-- ins-checkbox -->
          <ins-checkbox
            v-if="formItem.element === 'checkbox'"
            v-model:modelValue="formItem.value"
            :form-item="formItem"
            :index="index"
            @change="change(formItem)"
          />

          <!-- ins-radio -->
          <ins-radio
            v-if="formItem.element === 'radio'"
            v-model:modelValue="formItem.value"
            :form-item="formItem"
            :index="index"
            @change="change(formItem)"
          />

          <!-- ins-cascader -->
          <ins-cascader
            v-if="formItem.element === 'cascader'"
            v-model:modelValue="formItem.value"
            :form-item="formItem"
            :index="index"
            @change="change(formItem)"
          />

          <!-- ins-upload -->
          <ins-upload
            v-if="formItem.element === 'upload'"
            v-model:modelValue="formItem.value"
            :form-item="formItem"
            :index="index"
            @change="change(formItem)"
          />
        </template>
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
</template>

<style lang="scss">
.ins-form {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: row wrap;
  .form-item {
    width: 100%;
  }
}
</style>
