<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection.vue'
import ApproachSection from '@/components/home/ApproachSection.vue'
import CtaSection from '@/components/home/CtaSection.vue'
</script>

<template>
  <div class="home-page">
    <HeroSection />
    <AboutSection />
    <WhyChooseUsSection />
    <ApproachSection />
    <div class="container">
      <CtaSection />
    </div>
  </div>
</template>
