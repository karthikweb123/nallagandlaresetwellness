<script setup lang="ts">
import { useRoute } from 'vue-router'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'

const route = useRoute()
</script>

<template>
  <div class="default-layout">
    <Navbar />
    <main class="default-layout__main">
      <RouterView v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </RouterView>
    </main>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.default-layout__main {
  flex: 1;
}

:deep(.page-enter-active),
:deep(.page-leave-active) {
  transition:
    opacity $duration-base $ease-smooth,
    transform $duration-base $ease-smooth;
}
:deep(.page-enter-from) {
  opacity: 0;
  transform: translateY(16px);
}
:deep(.page-leave-to) {
  opacity: 0;
  transform: translateY(-16px);
}
</style>
