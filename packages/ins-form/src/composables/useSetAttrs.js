import { computed } from 'vue'

/**
 * ins-form attrs
 * @returns
 */
export default function (attrs) {
  const defaultAttrs = {
    'label-width': '100px',
  }

  const $attrs = computed(() => {
    let result = {}

    result = Object.assign({}, defaultAttrs, attrs)
    return result
  })
  return {
    $attrs,
  }
}
