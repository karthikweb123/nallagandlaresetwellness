<script setup lang="ts">
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import BaseButton from '@/components/common/BaseButton.vue'

const { setTarget, isVisible } = useScrollAnimation()
</script>

<template>
  <section :ref="setTarget" class="cta" :class="{ 'is-visible': isVisible }">
    <div class="cta__panel">
      <div class="cta__glow" aria-hidden="true" />
      <h2 class="reveal">Your pain-free life starts with a single call.</h2>
      <p class="lead reveal reveal-delay-1">Call or WhatsApp us today to book your first appointment.</p>
      <div class="reveal reveal-delay-2">
        <BaseButton to="/contact" variant="secondary" size="lg">Book Appointment</BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.cta {
  padding-block: 3rem 6rem;
}
.cta__panel {
  position: relative;
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 5rem 2rem;
  border-radius: $radius-xl;
  background: linear-gradient(135deg, var(--color-nature-green-dark), var(--color-nature-green));
  color: var(--color-white);
  isolation: isolate;
}
.cta__panel h2 {
  color: var(--color-white);
  max-width: 620px;
}
.cta__panel p {
  color: rgba(255, 255, 255, 0.85);
  max-width: 520px;
}
.cta__glow {
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.25), transparent 70%);
  top: -120px;
  right: -100px;
  z-index: -1;
}
</style>
