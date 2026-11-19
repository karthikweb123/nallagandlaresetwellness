<script setup lang="ts">
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { useEdgeReveal } from '@/composables/useEdgeReveal'
import SectionTitle from '@/components/common/SectionTitle.vue'

const { setTarget, isVisible } = useScrollAnimation()

const steps = [
  { title: 'Assess', desc: 'A thorough evaluation of your posture, movement, and pain history.' },
  { title: 'Diagnose', desc: 'We identify the root cause of your pain, not just where it hurts.' },
  { title: 'Treat', desc: 'Hands-on chiropractic care, physiotherapy, and manual therapy sessions.' },
  { title: 'Recover', desc: 'Guided rehab and strengthening plans that prevent the pain from returning.' },
]

const { visible, setEl } = useEdgeReveal(steps.length)
</script>

<template>
  <section id="approach" :ref="setTarget" class="approach section" :class="{ 'is-visible': isVisible }">
    <div class="container">
      <SectionTitle eyebrow="Our Approach" title="A calm, structured path to lasting change." />
      <ol class="approach__steps">
        <li
          v-for="(step, i) in steps"
          :key="step.title"
          :ref="(el) => setEl(el, i)"
          class="approach__step"
          :class="{ 'approach__step--visible': visible[i] }"
          :style="{ transitionDelay: `${i * 0.08}s` }"
        >
          <span class="approach__number">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.desc }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped lang="scss">
.approach__steps {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: 1fr;
  @include respond(sm) {
    grid-template-columns: repeat(2, 1fr);
  }
  @include respond(md) {
    grid-template-columns: repeat(4, 1fr);
  }
}
.approach__step {
  @include card-elevate;
  position: relative;
  overflow: hidden;
  padding: 2rem 1.75rem;
  border-radius: $radius-lg;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  opacity: 0;
  transform: translateY(32px);
  transition:
    opacity 0.6s $ease-smooth,
    transform 0.6s $ease-smooth;
}
.approach__step--visible {
  opacity: 1;
  transform: translateY(0);
}
.approach__number {
  display: block;
  font-family: var(--font-heading);
  font-size: 3.4rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 1rem;
  @include gradient-text;
  opacity: 0.85;
}
.approach__step h3 {
  margin-bottom: 0.5rem;
}
.approach__step p {
  font-size: 0.92rem;
}
</style>
