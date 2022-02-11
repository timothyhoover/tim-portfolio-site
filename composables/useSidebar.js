import { ref } from 'vue'

const isOpen = ref(false)

export const useSidebar = (open) => {
  open ? (isOpen.value = false) : (isOpen.value = true)
  return { isOpen }
}
