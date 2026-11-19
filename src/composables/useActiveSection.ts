import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export function useActiveSection(sectionIds: string[]) {
  const activeId = ref('')
  const route = useRoute()
  let observer: IntersectionObserver | null = null

  function setup() {
    observer?.disconnect()
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (!elements.length) return

    observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        activeId.value = mostVisible ? mostVisible.target.id : ''
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )
    elements.forEach((el) => observer?.observe(el))
  }

  onMounted(() => {
    setup()
    watch(
      () => route.fullPath,
      () => {
        activeId.value = ''
        requestAnimationFrame(setup)
      },
    )
  })

  onUnmounted(() => observer?.disconnect())

  return { activeId }
}
