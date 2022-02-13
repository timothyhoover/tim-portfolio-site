import { ref } from 'vue'

const isOpen = ref()

export const useSidebar = (open = true) => {
  open ? (isOpen.value = false) : (isOpen.value = true)
  return { isOpen }
}
