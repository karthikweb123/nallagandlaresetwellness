<script setup lang="ts">
defineProps<{ label: string; value: string }>()
</script>

<template>
  <div class="contact-card">
    <span class="contact-card__label eyebrow">{{ label }}</span>
    <p class="contact-card__value">{{ value }}</p>
  </div>
</template>

<style scoped lang="scss">
.contact-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.contact-card__value {
  color: var(--color-text-dark);
  font-weight: 600;
  font-size: 1.05rem;
  overflow-wrap: break-word;
}
</style>
