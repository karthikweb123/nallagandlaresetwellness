<script setup lang="ts">
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import SectionTitle from '@/components/common/SectionTitle.vue'
import ServicesGrid from '@/components/services/ServicesGrid.vue'
import CtaSection from '@/components/home/CtaSection.vue'

const { setTarget, isVisible } = useScrollAnimation(0.1)
</script>

<template>
  <div class="services-page">
    <header :ref="setTarget" class="services-page__header section" :class="{ 'is-visible': isVisible }">
      <div class="container">
        <SectionTitle
          eyebrow="Our Services"
          title="Guided care for every step of your recovery."
          description="From chiropractic adjustments to full rehabilitation programs — every service is drug-free, non-invasive, and personalized to your condition."
        />
      </div>
    </header>
    <ServicesGrid />
    <div class="container">
      <CtaSection />
    </div>
  </div>
</template>

<style scoped lang="scss">
.services-page__header {
  padding-top: 9rem;
  padding-bottom: 2rem;
  background: linear-gradient(180deg, var(--color-light-blue-bg), transparent);
}
</style>
