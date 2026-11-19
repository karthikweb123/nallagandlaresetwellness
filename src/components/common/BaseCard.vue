<script setup lang="ts">
withDefaults(defineProps<{ padded?: boolean }>(), { padded: true })
</script>

<template>
  <div class="base-card" :class="{ 'base-card--padded': padded }">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.base-card {
  background: var(--color-white);
  border-radius: $radius-lg;
  border: 1px solid var(--color-border);
  box-shadow: $shadow-soft;
  @include card-elevate;
}

.base-card--padded {
  padding: 2.25rem;
}
</style>
