import { ref, watch } from 'vue'

export const useMobileMenu = () => {
  const isMenuOpen = ref(false)

  // Disable body scroll when menu is open
  watch(isMenuOpen, (val) => {
    document.body.style.overflow = val ? 'hidden' : ''
  })

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const closeMenu = () => {
    isMenuOpen.value = false
  }

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu,
  }
}
