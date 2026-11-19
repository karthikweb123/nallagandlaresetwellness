<script setup lang="ts">
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { useEdgeReveal } from '@/composables/useEdgeReveal'
import SectionTitle from '@/components/common/SectionTitle.vue'

const { setTarget, isVisible } = useScrollAnimation()

const reasons = [
  {
    title: 'Drug-Free & Non-Invasive',
    desc: 'Manual chiropractic and physiotherapy care, without medicine or surgery.',
    featured: true,
    icon: 'shield',
  },
  {
    title: 'Root-Cause Diagnosis',
    desc: 'We treat the source of your pain, not just the symptoms.',
    icon: 'target',
  },
  {
    title: 'Founder-Led Care',
    desc: 'Care led by Dr. Pream Chand, Founder of RESET Wellness Center.',
    icon: 'badge',
  },
  {
    title: 'Personalized Treatment Plans',
    desc: 'Every plan is built around your condition and goals, not a template.',
    icon: 'sliders',
  },
  {
    title: 'Trusted in Hyderabad',
    desc: 'Three branches across Miyapur, Madhapur, and Nallagandla, serving patients all over Hyderabad.',
    icon: 'pin',
  },
]

const { visible, setEl } = useEdgeReveal(reasons.length)
</script>

<template>
  <section id="why-us" :ref="setTarget" class="why section" :class="{ 'is-visible': isVisible }">
    <div class="container">
      <SectionTitle eyebrow="Why Choose Us" title="Care that meets you exactly where you are." align="left" />
      <div class="why__grid">
        <div
          v-for="(reason, i) in reasons"
          :key="reason.title"
          :ref="(el) => setEl(el, i)"
          class="why__card why__card--edge"
          :class="[
            { 'why__card--featured': reason.featured },
            i % 2 === 0 ? 'why__card--from-left' : 'why__card--from-right',
            { 'why__card--visible': visible[i] },
          ]"
        >
          <span class="why__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8">
              <template v-if="reason.icon === 'shield'">
                <path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3z" />
                <path d="m9 12 2 2 4-4" />
              </template>
              <template v-else-if="reason.icon === 'target'">
                <circle cx="12" cy="12" r="8" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
              </template>
              <template v-else-if="reason.icon === 'badge'">
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="10" r="2.5" />
                <path d="M7 17.5c1-2.2 2.8-3 5-3s4 0.8 5 3" />
              </template>
              <template v-else-if="reason.icon === 'sliders'">
                <line x1="4" y1="7" x2="20" y2="7" />
                <circle cx="9" cy="7" r="2" fill="var(--color-white)" />
                <line x1="4" y1="13" x2="20" y2="13" />
                <circle cx="15" cy="13" r="2" fill="var(--color-white)" />
                <line x1="4" y1="19" x2="20" y2="19" />
                <circle cx="11" cy="19" r="2" fill="var(--color-white)" />
              </template>
              <template v-else-if="reason.icon === 'pin'">
                <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.4" />
              </template>
            </svg>
          </span>
          <h3>{{ reason.title }}</h3>
          <p>{{ reason.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.why {
  overflow: hidden;
  background: linear-gradient(180deg, var(--color-light-blue-bg), var(--color-soft-gray));
}
.why__grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  @include respond(sm) {
    grid-template-columns: repeat(2, 1fr);
  }
  @include respond(md) {
    grid-template-columns: repeat(4, 1fr);
  }
}
.why__card {
  padding: 2rem 1.75rem;
  border-radius: $radius-lg;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  @include card-elevate;
}
.why__card--edge {
  transition:
    opacity 0.7s $ease-smooth,
    transform 0.7s $ease-smooth;
  will-change: opacity, transform;
}
.why__card--from-left {
  opacity: 0;
  transform: translateX(-70px);
}
.why__card--from-right {
  opacity: 0;
  transform: translateX(70px);
}
.why__card--visible {
  opacity: 1;
  transform: translateX(0);
}
.why__card h3 {
  margin-top: 1.1rem;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}
.why__card p {
  font-size: 0.92rem;
}
.why__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: $radius-md;
  background: var(--color-light-blue-bg);
  color: var(--color-nature-green-dark);
}

.why__card--featured {
  color: var(--color-white);
  background: linear-gradient(135deg, var(--color-nature-green-dark), var(--color-nature-green));
  border-color: transparent;

  .why__icon {
    background: rgba(255, 255, 255, 0.16);
    color: var(--color-white);
  }
  h3 {
    color: var(--color-white);
  }
  p {
    color: rgba(255, 255, 255, 0.85);
  }

  @include respond(md) {
    grid-column: span 2;
    grid-row: span 2;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      font-size: 1.4rem;
    }
    p {
      font-size: 1rem;
      max-width: 320px;
    }
  }
}
</style>
