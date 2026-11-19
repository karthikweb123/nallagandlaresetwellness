import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollProgress() {
  const progress = ref(0)
  const isScrolled = ref(false)

  function update() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    const max = scrollHeight - clientHeight
    progress.value = max > 0 ? (scrollTop / max) * 100 : 0
    isScrolled.value = scrollTop > 24
  }

  onMounted(() => {
    window.addEventListener('scroll', update, { passive: true })
    update()
  })

  onUnmounted(() => window.removeEventListener('scroll', update))

  return { progress, isScrolled }
}
