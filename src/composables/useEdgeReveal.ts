import { onMounted, onUnmounted, ref, type ComponentPublicInstance, type Ref } from 'vue'

// Reversible scroll reveal for a list of elements: each element toggles
// visible on/off every time it enters/leaves the viewport (unlike
// useScrollAnimation, which fires once and stays visible).
export function useEdgeReveal(count: number, threshold = 0.15) {
  const visible = ref<boolean[]>(Array(count).fill(false))
  const els: (Element | null)[] = []
  let observer: IntersectionObserver | null = null

  function setEl(el: Element | ComponentPublicInstance | null, index: number) {
    els[index] = el instanceof Element ? el : null
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = els.indexOf(entry.target)
          if (index !== -1) visible.value[index] = entry.isIntersecting
        })
      },
      { threshold, rootMargin: '0px 0px -10% 0px' },
    )
    els.forEach((el) => el && observer?.observe(el))
  })

  onUnmounted(() => observer?.disconnect())

  return { visible: visible as Ref<boolean[]>, setEl }
}
