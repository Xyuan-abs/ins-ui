import InsForm from './index.js'

import InsText from './components/ins-text'
import InsInput from './components/ins-input'
import InsInputNumber from './components/ins-input-number'
import InsSelect from './components/ins-select'
import InsCascader from './components/ins-cascader'
import InsCheckbox from './components/ins-checkbox'
import InsRadio from './components/ins-radio'
import InsDatePicker from './components/ins-date-picker'
import InsUpload from './components/ins-upload'
import InsRate from './components/ins-rate'

import './styles/index.scss'

let list = [
  InsForm,
  InsText,
  InsInput,
  InsInputNumber,
  InsSelect,
  InsCascader,
  InsCheckbox,
  InsRadio,
  InsDatePicker,
  InsUpload,
  InsRate,
]

function install(app, options) {
  list.forEach((component) => {
    component.install(app)
  })
}

export default {
  name: 'ins-form',
  install,
}
