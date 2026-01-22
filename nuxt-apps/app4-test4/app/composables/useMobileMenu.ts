import { ref, watch } from 'vue'

export const useMobileMenu = () => {
  const isMenuOpen = ref(false)

  // Disable body scroll when menu is open
  watch(isMenuOpen, (val) => {
    document.body.style.overflow = val ? 'hidden' : ''
  })

  // Animate on scroll
onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                // If the element is visible in the viewport
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-on-scroll') // Trigger animation
                    observer.unobserve(entry.target) // Stop observing once animated
                }
            })
        },
        { threshold: 0.2 } // 20% of element visible triggers animation
    )

    // Observe all elements with class "animate-on-scroll"
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
})
  return {
    isMenuOpen,
  }
}
