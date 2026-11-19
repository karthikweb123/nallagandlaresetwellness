<script setup lang="ts">
import { onMounted, ref } from 'vue'
import LogoMark from '@/components/common/LogoMark.vue'

const isLoading = ref(true)

onMounted(() => {
  window.setTimeout(() => {
    isLoading.value = false
  }, 1100)
})
</script>

<template>
  <transition name="loader">
    <div v-if="isLoading" class="loading-screen" role="status" aria-label="Loading RESET Wellness Center">
      <LogoMark :size="72" />
      <span class="loading-screen__text">RESET</span>
      <span class="loading-screen__bar"><span class="loading-screen__fill" /></span>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.loading-screen {
  position: fixed;
  inset: 0;
  z-index: $z-loading;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  background: linear-gradient(160deg, var(--color-nature-green-dark), var(--color-nature-green));
}

.loading-screen__text {
  font-family: var(--font-heading);
  font-weight: 700;
  letter-spacing: 0.3em;
  color: var(--color-white);
  font-size: 1.1rem;
  animation: fadeIn 1s $ease-smooth 0.2s both;
}

.loading-screen__bar {
  width: 160px;
  height: 3px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
  overflow: hidden;
}
.loading-screen__fill {
  display: block;
  height: 100%;
  width: 40%;
  border-radius: 999px;
  background: var(--color-white);
  animation: shimmer 1.1s ease-in-out infinite;
}

.loader-leave-active {
  transition:
    opacity 0.5s $ease-smooth,
    transform 0.5s $ease-smooth;
}
.loader-leave-to {
  opacity: 0;
  transform: scale(1.04);
}
</style>
