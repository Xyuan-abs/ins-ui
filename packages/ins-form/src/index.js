import InsForm from '../components/ins-form'
import InsDatePicker from '../components/ins-date-picker'
import InsInput from '../components/ins-input'
import InsInputNumber from '../components/ins-input-number'
import InsSelect from '../components/ins-select'

import '../styles/index.scss'

let list = [InsForm, InsDatePicker, InsInput, InsInputNumber, InsSelect]

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