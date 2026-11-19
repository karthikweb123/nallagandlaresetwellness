<script setup lang="ts">
withDefaults(
  defineProps<{
    opacity?: number
    blur?: number
    radius?: 'md' | 'lg' | 'xl'
  }>(),
  { opacity: 0.97, blur: 6, radius: 'lg' },
)
</script>

<template>
  <div
    class="glass-panel"
    :class="`glass-panel--${radius}`"
    :style="{ '--glass-opacity': opacity, '--glass-blur': `${blur}px` }"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
.glass-panel {
  background: rgba(255, 255, 255, var(--glass-opacity));
  backdrop-filter: blur(var(--glass-blur)) saturate(160%);
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(160%);
  border: 1px solid var(--color-glass-border);
  box-shadow: $shadow-soft;
}

.glass-panel--md {
  border-radius: $radius-md;
}
.glass-panel--lg {
  border-radius: $radius-lg;
}
.glass-panel--xl {
  border-radius: $radius-xl;
}
</style>
