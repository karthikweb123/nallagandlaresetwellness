<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue'
</script>

<template>
  <div class="not-found section">
    <div class="container not-found__inner">
      <span class="eyebrow">404</span>
      <h1>This path hasn't grown in yet.</h1>
      <p class="lead">The page you're looking for may have moved. Let's guide you back to solid ground.</p>
      <BaseButton to="/" size="lg">Return Home</BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.not-found {
  padding-top: 10rem;
  min-height: 60vh;
}
.not-found__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
}
</style>
