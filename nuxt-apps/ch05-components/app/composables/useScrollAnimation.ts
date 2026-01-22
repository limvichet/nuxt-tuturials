import { onMounted, onUnmounted } from 'vue'

export const useScrollAnimation = () => {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-on-scroll')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    document
      .querySelectorAll('.animate-on-scroll')
      .forEach(el => observer!.observe(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}