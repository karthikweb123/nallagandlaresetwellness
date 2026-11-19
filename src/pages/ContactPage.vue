<script setup lang="ts">
import ContactSection from '@/components/contact/ContactSection.vue'
import FaqAccordion from '@/components/common/FaqAccordion.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import { FAQ_ITEMS } from '@/constants/faq'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { setTarget, isVisible } = useScrollAnimation(0.1)
</script>

<template>
  <div class="contact-page">
    <div class="contact-page__spacer" />
    <ContactSection />
    <section :ref="setTarget" class="contact-page__faq section" :class="{ 'is-visible': isVisible }">
      <div class="container contact-page__faq-inner">
        <SectionTitle eyebrow="FAQ" title="Answers before you begin." align="left" />
        <FaqAccordion :items="FAQ_ITEMS" />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.contact-page__spacer {
  height: 5rem;
}
.contact-page__faq {
  padding-top: 0;
}
.contact-page__faq-inner {
  max-width: 760px;
}
</style>
