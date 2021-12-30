import InsTable from './index.js'

let list = [InsTable]

function install(app, options) {
  list.forEach((component) => {
    component.install(app)
  })
}

export default {
  name: 'ins-table',
  install,
}
