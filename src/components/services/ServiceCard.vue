<script setup lang="ts">
import type { Service } from '@/types'

defineProps<{ service: Service; index: number }>()
</script>

<template>
  <RouterLink
    :to="`/services/${service.id}`"
    class="service-card reveal-scale"
    :class="`reveal-delay-${(index % 6) + 1}`"
  >
    <div class="service-card__media">
      <img class="service-card__image" :src="service.image" :alt="service.title" loading="lazy" />
    </div>
    <div class="service-card__body">
      <h3>{{ service.title }}</h3>
      <p>{{ service.description }}</p>
      <ul class="service-card__benefits">
        <li v-for="benefit in service.benefits" :key="benefit">{{ benefit }}</li>
      </ul>
      <span class="service-card__link">View Details &rarr;</span>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.service-card {
  position: relative;
  display: block;
  overflow: hidden;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: $radius-lg;
  @include card-elevate;
}

.service-card__media {
  aspect-ratio: 8 / 5;
  overflow: hidden;
}
.service-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform $duration-base $ease-smooth;
}
.service-card:hover .service-card__image {
  transform: scale(1.05);
}

.service-card__body {
  position: relative;
  padding: 1.75rem 2rem 2rem;
}
.service-card__body h3 {
  margin-bottom: 0.75rem;
}
.service-card__body p {
  margin-bottom: 1.25rem;
}
.service-card__benefits {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.service-card__benefits li {
  position: relative;
  padding-left: 1.4rem;
  font-size: 0.9rem;
  color: var(--color-text-dark);
}
.service-card__benefits li::before {
  content: '◦';
  position: absolute;
  left: 0;
  color: var(--color-nature-green);
}

.service-card__link {
  position: relative;
  z-index: 1;
  display: inline-block;
  margin-top: 1.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-nature-green-dark);
  transition: transform $duration-fast $ease-out-soft;
}
.service-card:hover .service-card__link {
  transform: translateX(4px);
}
</style>
