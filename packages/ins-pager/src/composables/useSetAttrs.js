import { computed, useAttrs } from 'vue'

/**
 * 获取 表格 attrs
 * @param {*} attrs 外部attr
 * @returns
 */
export default function (pagerParams) {
  const defaultAttrs = {
    background: true,
    layout: 'total,sizes,jumper,->,prev, pager, next',
  }

  let attrs = useAttrs()

  const $attrs = computed(() => {
    let result = {}

    result = Object.assign({}, defaultAttrs, attrs)

    return result
  })

  return {
    $attrs,
  }
}
