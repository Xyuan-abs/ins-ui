import { ref } from 'vue'

/**
 *  表格 事件
 * @returns
 */
export default function () {
  let elTableRef = ref(null)
  let dispatch = (eventName, ...arg) => {
    elTableRef.value[eventName](...arg)
  }

  return {
    elTableRef,
    dispatch,
  }
}
