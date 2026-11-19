<script setup lang="ts">
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { SERVICES } from '@/constants/services'
import ServiceCard from './ServiceCard.vue'

const { setTarget, isVisible } = useScrollAnimation(0.08)
</script>

<template>
  <section :ref="setTarget" class="services-grid section" :class="{ 'is-visible': isVisible }">
    <div class="container">
      <div class="services-grid__list">
        <ServiceCard v-for="(service, i) in SERVICES" :key="service.id" :service="service" :index="i" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.services-grid {
  padding-top: 2rem;
}
.services-grid__list {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  @include respond(sm) {
    grid-template-columns: repeat(2, 1fr);
  }
  @include respond(lg) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
