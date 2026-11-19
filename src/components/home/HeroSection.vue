<script setup lang="ts">
import { onMounted, ref } from 'vue'
import BaseButton from '@/components/common/BaseButton.vue'

const isLoaded = ref(false)
const tags = ['Drug-Free & Non-Invasive', 'Same-Week Appointments', 'Personalized Care Plans']

onMounted(() => {
  requestAnimationFrame(() => {
    isLoaded.value = true
  })
})
</script>

<template>
  <section class="hero" :class="{ 'is-visible': isLoaded }">
    <div class="hero__bg" />

    <div class="container hero__inner">
      <span class="hero__badge reveal">
        <span class="hero__badge-dot" />
        Neurotherapy &amp; Chiropractic Wellness Center
      </span>
      <h1 class="hero__headline reveal reveal-delay-1">
        <span class="hero__line">Realign Your Spine.</span><br />
        <span class="hero__line">Repair Your Body.</span><br />
        <span class="hero__line hero__headline-accent">Renew Your Life.</span>
      </h1>
      <p class="lead hero__desc reveal reveal-delay-2">
        Drug-free chiropractic care, physiotherapy, and rehabilitation — for a pain-free life.
      </p>
      <div class="hero__actions reveal reveal-delay-3">
        <BaseButton to="/contact" size="lg">Book Appointment</BaseButton>
        <BaseButton to="/services" variant="secondary" size="lg">Explore Services</BaseButton>
      </div>
      <ul class="hero__tags reveal reveal-delay-4">
        <li v-for="tag in tags" :key="tag">{{ tag }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding-block: 7.5rem 3rem;
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(180deg, var(--color-light-blue-bg) 0%, var(--color-soft-gray) 100%);
}

.hero__inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  max-width: 1000px;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.55rem 1.1rem 0.55rem 0.85rem;
  border-radius: $radius-full;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  box-shadow: $shadow-soft;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-text-muted);
}
.hero__badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-nature-green);
  flex-shrink: 0;
}

.hero__headline {
  font-size: clamp(2.3rem, 6vw + 1rem, 4.9rem);
  letter-spacing: -0.03em;
}
.hero__line {
  @include respond(sm) {
    white-space: nowrap;
  }
}
.hero__headline-accent {
  @include gradient-text;
}
.hero__desc {
  max-width: 520px;
}
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.25rem;
}

.hero__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.75rem;
}
.hero__tags li {
  padding: 0.45rem 0.9rem;
  border-radius: $radius-full;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-text-muted);
}
</style>
