<script setup lang="ts">
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { useEdgeReveal } from '@/composables/useEdgeReveal'
import GlassPanel from '@/components/common/GlassPanel.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import premChandPhoto from '@/assets/about/Pream.jpeg'

const { setTarget, isVisible } = useScrollAnimation()

const points = [
  'Years of experience healing patients in Hyderabad',
  'Drug-free, non-invasive treatment',
  'Founder-led, dedicated care',
]
const { visible, setEl } = useEdgeReveal(points.length)
</script>

<template>
  <section id="about" :ref="setTarget" class="about section" :class="{ 'is-visible': isVisible }">
    <div class="container about__grid">
      <div class="about__visual reveal-scale">
        <GlassPanel radius="xl" class="about__visual-panel">
          <img class="about__image" :src="premChandPhoto" alt="Dr. Pream Chand, Founder of RESET Wellness Center" />
        </GlassPanel>
        <div class="about__credential">
          <span class="about__credential-name">Dr. Pream Chand</span>
          <span class="about__credential-role">Founder, RESET Wellness Center</span>
        </div>
      </div>

      <div class="about__content">
        <SectionTitle eyebrow="About RESET" title="From bare branches to full bloom." align="left" />
        <p class="lead reveal reveal-delay-1">
          One of Hyderabad's most trusted centers for drug-free pain relief, healing patients through
          chiropractic care, physiotherapy, and rehabilitation.
        </p>
        <p class="reveal reveal-delay-2">
          Led by Dr. Pream Chand, our team restores alignment, relieves pain, and rebuilds mobility —
          one session at a time.
        </p>
        <ul class="about__points">
          <li
            v-for="(point, i) in points"
            :key="point"
            :ref="(el) => setEl(el, i)"
            class="about__point"
            :class="{ 'about__point--visible': visible[i] }"
          >
            {{ point }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  overflow: hidden;
}
.about__grid {
  display: grid;
  gap: 3rem;
  align-items: center;
  grid-template-columns: 1fr;
  @include respond(lg) {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 4.5rem;
  }
}

.about__visual {
  position: relative;
  order: -1;
  @include respond(lg) {
    order: 1;
  }
}
.about__visual-panel {
  position: relative;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.about__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.about__credential {
  position: absolute;
  left: 1.25rem;
  bottom: -1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  max-width: 78%;
  padding: 1rem 1.4rem;
  border-radius: $radius-lg;
  background: var(--color-white);
  box-shadow: $shadow-elevated;
}
.about__credential-name {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--color-text-dark);
}
.about__credential-role {
  font-size: 0.78rem;
  color: var(--color-text-muted);
}

.about__points {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;
}
.about__point {
  position: relative;
  padding-left: 1.6rem;
  color: var(--color-text-dark);
  font-weight: 500;
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.5s $ease-smooth,
    transform 0.5s $ease-smooth;
}
.about__point::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-nature-green);
  font-weight: 700;
}
.about__point--visible {
  opacity: 1;
  transform: translateY(0);
}
.about__point:nth-child(2) {
  transition-delay: 0.08s;
}
.about__point:nth-child(3) {
  transition-delay: 0.16s;
}
</style>
