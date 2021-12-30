import { computed, useAttrs } from 'vue'

/**
 * ins-form attrs
 * @returns
 */
export default function () {
  const defaultAttrs = {
    'label-width': '100px',
  }

  const $attrs = computed(() => {
    let result = {}

    let attrs = useAttrs()

    result = Object.assign({}, defaultAttrs, attrs)

    return result
  })

  return {
    $attrs,
  }
}
