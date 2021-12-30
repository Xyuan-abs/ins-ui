import pager from './index.js'

let list = [pager]

function install(app, options) {
  list.forEach((component) => {
    component.install(app)
  })
}

export default {
  name: 'ins-pager',
  install,
}
