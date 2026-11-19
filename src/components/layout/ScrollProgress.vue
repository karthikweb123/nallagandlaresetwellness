<script setup lang="ts">
import { useScrollProgress } from '@/composables/useScrollProgress'

const { progress } = useScrollProgress()
</script>

<template>
  <div
    class="scroll-progress"
    role="progressbar"
    :aria-valuenow="Math.round(progress)"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div class="scroll-progress__bar" :style="{ width: `${progress}%` }" />
  </div>
</template>

<style scoped lang="scss">
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: $z-nav + 1;
  background: transparent;
}
.scroll-progress__bar {
  height: 100%;
  background: var(--color-nature-green);
  transition: width 0.1s linear;
}
</style>
