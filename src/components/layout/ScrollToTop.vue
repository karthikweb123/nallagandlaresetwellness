<script setup lang="ts">
import { useScrollProgress } from '@/composables/useScrollProgress'

const { isScrolled } = useScrollProgress()

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <transition name="pop">
    <button v-if="isScrolled" class="scroll-top" aria-label="Scroll to top" @click="scrollToTop">
      <span class="scroll-top__arrow">&uarr;</span>
    </button>
  </transition>
</template>

<style scoped lang="scss">
.scroll-top {
  position: fixed;
  right: 1.75rem;
  bottom: 11.25rem;
  z-index: $z-overlay;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: var(--color-white);
  background: linear-gradient(135deg, var(--color-nature-green-dark), var(--color-nature-green-light));
  box-shadow: $shadow-medium;
  font-size: 1.2rem;
  transition:
    transform $duration-fast $ease-out-soft,
    box-shadow $duration-fast $ease-out-soft;
  @include focus-ring;

  &:hover {
    transform: translateY(-4px);
    box-shadow: $shadow-elevated, $shadow-glow-green;
  }
}

.pop-enter-active,
.pop-leave-active {
  transition:
    opacity $duration-fast $ease-out-soft,
    transform $duration-fast $ease-out-soft;
}
.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.6) translateY(12px);
}
</style>
