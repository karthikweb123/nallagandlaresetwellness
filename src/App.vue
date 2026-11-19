<script setup lang="ts">
import LoadingScreen from '@/components/layout/LoadingScreen.vue'
import ScrollProgress from '@/components/layout/ScrollProgress.vue'
import ScrollToTop from '@/components/layout/ScrollToTop.vue'
import FloatingBookButton from '@/components/layout/FloatingBookButton.vue'
import FloatingWhatsAppButton from '@/components/layout/FloatingWhatsAppButton.vue'
import InquiryPopup from '@/components/layout/InquiryPopup.vue'
</script>

<template>
  <LoadingScreen />
  <ScrollProgress />
  <RouterView />
  <ScrollToTop />
  <FloatingWhatsAppButton />
  <FloatingBookButton />
  <InquiryPopup />
</template>
