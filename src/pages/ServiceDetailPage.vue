<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import SectionTitle from '@/components/common/SectionTitle.vue'
import GlassPanel from '@/components/common/GlassPanel.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { SERVICES } from '@/constants/services'

const route = useRoute()
const router = useRouter()
const { setTarget, isVisible } = useScrollAnimation(0.1)

const service = computed(() => SERVICES.find((s) => s.id === route.params.id))

onMounted(() => {
  if (!service.value) {
    router.replace('/services')
    return
  }
  document.title = `${service.value.title} | RESET Wellness Center`
})
</script>

<template>
  <div v-if="service" :ref="setTarget" class="service-detail" :class="{ 'is-visible': isVisible }">
    <header class="service-detail__header section">
      <div class="container">
        <RouterLink to="/services" class="service-detail__back reveal">&larr; All Services</RouterLink>
        <SectionTitle
          eyebrow="Our Services"
          :title="service.title"
          :description="service.description"
          align="left"
        />
      </div>
    </header>

    <div class="container">
      <div class="service-detail__media reveal-scale">
        <img :src="service.image" :alt="service.title" class="service-detail__image" />
      </div>

      <div class="service-detail__grid">
        <div class="service-detail__content">
          <div class="service-detail__block reveal">
            <h2>What This Service Is</h2>
            <p>{{ service.longDescription }}</p>
          </div>

          <div class="service-detail__block reveal reveal-delay-1">
            <h2>Who Needs This Service</h2>
            <ul class="service-detail__list">
              <li v-for="item in service.whoNeedsIt" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>

        <GlassPanel radius="xl" class="service-detail__sidebar reveal-right">
          <h2>Benefits</h2>
          <ul class="service-detail__list service-detail__list--check">
            <li v-for="benefit in service.benefits" :key="benefit">{{ benefit }}</li>
          </ul>
          <BaseButton to="/contact" size="lg" class="service-detail__cta">Book Appointment</BaseButton>
        </GlassPanel>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.service-detail__header {
  padding-top: 9rem;
  padding-bottom: 1.5rem;
  background: linear-gradient(180deg, var(--color-light-blue-bg), transparent);
}
.service-detail__back {
  display: inline-block;
  margin-bottom: 1.25rem;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-text-muted);
  transition: color $duration-fast $ease-out-soft;

  &:hover {
    color: var(--color-nature-green-dark);
  }
}

.service-detail__media {
  border-radius: $radius-xl;
  overflow: hidden;
  aspect-ratio: 21 / 9;
  box-shadow: $shadow-medium;
}
.service-detail__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.service-detail__grid {
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr;
  padding-block: 3.5rem 6rem;
  @include respond(lg) {
    grid-template-columns: 1.5fr 1fr;
    gap: 4rem;
  }
}

.service-detail__content {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
.service-detail__block h2 {
  margin-bottom: 1rem;
  font-size: 1.4rem;
}
.service-detail__block p {
  color: var(--color-text-muted);
}

.service-detail__sidebar {
  align-self: start;
  padding: 2.25rem;
  @include respond(lg) {
    position: sticky;
    top: 8rem;
  }
}
.service-detail__sidebar h2 {
  margin-bottom: 1.25rem;
  font-size: 1.2rem;
}
.service-detail__cta {
  width: 100%;
  margin-top: 1.75rem;
}

.service-detail__list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.service-detail__list li {
  position: relative;
  padding-left: 1.5rem;
  color: var(--color-text-dark);
  font-weight: 500;
}
.service-detail__list li::before {
  content: '◦';
  position: absolute;
  left: 0;
  color: var(--color-nature-green);
  font-weight: 700;
}
.service-detail__list--check li::before {
  content: '✓';
}
</style>
