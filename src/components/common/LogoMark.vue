<script setup lang="ts">
import logo from '@/assets/brand/logo.jpg'

withDefaults(defineProps<{ size?: number }>(), { size: 44 })
</script>

<template>
  <span class="logo-mark" :style="{ '--size': `${size}px` }">
    <img class="logo-mark__img" :src="logo" alt="RESET Wellness Center" />
  </span>
</template>

<style scoped lang="scss">
.logo-mark {
  position: relative;
  display: inline-block;
  width: var(--size);
  height: var(--size);
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
}

.logo-mark__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
