import { onMounted, onUnmounted, ref, type ComponentPublicInstance, type Ref } from 'vue'

export function useScrollAnimation(threshold = 0.18) {
  const target: Ref<HTMLElement | null> = ref(null)
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null
  const setTarget = (element: Element | ComponentPublicInstance | null) => {
    target.value = element instanceof HTMLElement ? element : null
  }

  onMounted(() => {
    if (!target.value) return
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer?.unobserve(entry.target)
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' },
    )
    observer.observe(target.value)
  })

  onUnmounted(() => observer?.disconnect())

  return { setTarget, isVisible }
}
