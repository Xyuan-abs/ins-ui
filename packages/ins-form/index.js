import InsForm from './components/ins-form/index.js'
import InsDatePicker from './components/ins-date-picker/index.js'
import InsInput from './components/ins-input/index.js'
import InsInputNumber from './components/ins-input-number/index.js'
import InsSelect from './components/ins-select/index.js'

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
