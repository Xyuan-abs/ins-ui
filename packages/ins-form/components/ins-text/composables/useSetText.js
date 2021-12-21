import { computed } from 'vue'

import getInputText from '../../ins-input/src/composables/useSetText'
import getInputNumberText from '../../ins-input-number/src/composables/useSetText'
import getSelectText from '../../ins-select/src/composables/useSetText'
import geDatePickerText from '../../ins-date-picker/src/composables/useSetText'

const textMap = {
  input: getInputText,
  inputNumber: getInputNumberText,
  select: getSelectText,
  datePicker: geDatePickerText,
}

export default function (item) {
  let text = computed(() => textMap[item?.element]?.(item))

  return {
    text,
  }
}
