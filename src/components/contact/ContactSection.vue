<script setup lang="ts">
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import SectionTitle from '@/components/common/SectionTitle.vue'
import GlassPanel from '@/components/common/GlassPanel.vue'
import ContactCard from './ContactCard.vue'
import ContactForm from './ContactForm.vue'
import { SITE, BRANCHES } from '@/constants/site'

const { setTarget, isVisible } = useScrollAnimation(0.05)

function branchMapsHref(mapQuery: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`
}
</script>

<template>
  <section :ref="setTarget" class="contact-section section" :class="{ 'is-visible': isVisible }">
    <div class="container">
      <SectionTitle eyebrow="Get In Touch" title="We'd love to hear where you're starting from." align="left" />

      <div class="contact-section__grid">
        <div class="contact-section__info reveal-left">
          <div class="contact-section__cards">
            <ContactCard label="Phone / WhatsApp" :value="SITE.phone" />
          </div>

          <div class="contact-section__branches">
            <a
              v-for="branch in BRANCHES"
              :key="branch.name"
              :href="branchMapsHref(branch.mapQuery)"
              target="_blank"
              rel="noopener"
              class="contact-section__branch"
              :aria-label="`Open ${branch.name} branch location in Google Maps`"
            >
              <span class="contact-section__branch-pin">📍</span>
              <div>
                <h4>{{ branch.name }}</h4>
                <p>{{ branch.address }}</p>
              </div>
            </a>
          </div>
        </div>

        <GlassPanel radius="xl" class="contact-section__form-panel reveal-right">
          <ContactForm />
        </GlassPanel>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact-section__grid {
  display: grid;
  gap: 3rem;
  grid-template-columns: minmax(0, 1fr);
  @include respond(lg) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
    gap: 4rem;
  }
}
.contact-section__info {
  min-width: 0;
}
.contact-section__cards {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: minmax(0, 1fr);
  margin-bottom: 2rem;
}
.contact-section__branches {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.contact-section__branch {
  display: flex;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border-radius: $radius-lg;
  background: var(--color-light-blue-bg);
  border: 1px solid var(--color-border);
  text-decoration: none;
  transition:
    border-color $duration-fast $ease-out-soft,
    transform $duration-fast $ease-out-soft;
  @include focus-ring;

  &:hover {
    border-color: var(--color-nature-green);
    transform: translateY(-2px);
  }
}
.contact-section__branch-pin {
  font-size: 1.4rem;
  line-height: 1;
}
.contact-section__branch h4 {
  color: var(--color-text-dark);
  font-size: 1rem;
  margin-bottom: 0.35rem;
}
.contact-section__branch p {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  overflow-wrap: break-word;
}
.contact-section__form-panel {
  padding: 2.5rem;
}
</style>
