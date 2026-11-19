<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    description?: string
    align?: 'left' | 'center'
  }>(),
  { align: 'center' },
)
</script>

<template>
  <div class="section-title" :class="`section-title--${align}`">
    <span v-if="eyebrow" class="eyebrow reveal">{{ eyebrow }}</span>
    <h2 class="reveal reveal-delay-1">{{ title }}</h2>
    <p v-if="description" class="lead section-title__desc reveal reveal-delay-2">{{ description }}</p>
  </div>
</template>

<style scoped lang="scss">
.section-title {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  margin-bottom: $space-xl;
}

.section-title--center {
  align-items: center;
  text-align: center;
}

.section-title--left {
  align-items: flex-start;
  text-align: left;
}

.section-title__desc {
  max-width: 620px;
}
</style>
