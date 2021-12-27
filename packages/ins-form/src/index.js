import InsForm from '../components/ins-form'
import InsText from '../components/ins-text'

import InsInput from '../components/ins-input'
import InsInputNumber from '../components/ins-input-number'
import InsSelect from '../components/ins-select'
import InsCascader from '../components/ins-cascader'
import InsCheckbox from '../components/ins-checkbox'
import InsRadio from '../components/ins-radio'
import InsDatePicker from '../components/ins-date-picker'
import InsUpload from '../components/ins-upload'

import '../styles/index.scss'

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
]

function install(app, options) {
  list.forEach((component) => {
    component.install(app)
  })
}
const form = {
  name: 'ins-form',
  install,
}

export default form
