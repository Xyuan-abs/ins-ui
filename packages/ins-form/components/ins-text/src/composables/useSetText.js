import { computed } from 'vue'

import getInputText from '../../../ins-input/src/composables/useSetText'
import getInputNumberText from '../../../ins-input-number/src/composables/useSetText'
import getSelectText from '../../../ins-select/src/composables/useSetText'
import getDatePickerText from '../../../ins-date-picker/src/composables/useSetText'
import getCheckboxText from '../../../ins-checkbox/src/composables/useSetText'
import getRadioText from '../../../ins-radio/src/composables/useSetText'
import getCascader from '../../../ins-cascader/src/composables/useSetText'

// get by element
const textMap = {
  input: getInputText,
  inputNumber: getInputNumberText,
  select: getSelectText,
  datePicker: getDatePickerText,
  checkbox: getCheckboxText,
  radio: getRadioText,
  cascader: getCascader,
}

export default function (formItem) {
  let text = computed(() => textMap[formItem?.element]?.(formItem))

  return {
    text,
  }
}
