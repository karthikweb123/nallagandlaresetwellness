<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import ContactForm from '@/components/contact/ContactForm.vue'

const STORAGE_KEY = 'reset-inquiry-popup-shown'
const isOpen = ref(false)

function close() {
  isOpen.value = false
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
}

watch(isOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)

  if (sessionStorage.getItem(STORAGE_KEY)) return

  window.setTimeout(() => {
    isOpen.value = true
    sessionStorage.setItem(STORAGE_KEY, '1')
  }, 1400)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <transition name="inquiry-popup-fade">
    <div v-if="isOpen" class="inquiry-popup" role="dialog" aria-modal="true" aria-label="Send us an inquiry">
      <div class="inquiry-popup__backdrop" @click="close" />
      <div class="inquiry-popup__panel">
        <button class="inquiry-popup__close" type="button" aria-label="Close" @click="close">✕</button>
        <div class="inquiry-popup__intro">
          <h3>Let's get you started</h3>
          <p>Share a few details and our care team will reach out to help you book the right visit.</p>
        </div>
        <ContactForm />
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.inquiry-popup {
  position: fixed;
  inset: 0;
  z-index: $z-modal;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.inquiry-popup__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(15, 30, 20, 0.55);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.inquiry-popup__panel {
  position: relative;
  width: 100%;
  max-width: 640px;
  max-height: min(88vh, 780px);
  overflow-y: auto;
  overscroll-behavior: contain;
  background: var(--color-white);
  border-radius: $radius-xl;
  box-shadow: $shadow-elevated;
  padding: 2.5rem;
  animation: fadeInUp $duration-base $ease-smooth both;

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
}

.inquiry-popup__close {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: $radius-full;
  background: var(--color-light-blue-bg);
  color: var(--color-text-dark);
  font-size: 0.9rem;
  transition:
    background $duration-fast $ease-out-soft,
    transform $duration-fast $ease-out-soft;
  @include focus-ring;

  &:hover {
    background: var(--color-border);
    transform: scale(1.06);
  }
}

.inquiry-popup__intro {
  margin-bottom: 1.75rem;
  padding-right: 2.5rem;
}
.inquiry-popup__intro h3 {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: var(--color-text-dark);
  margin-bottom: 0.5rem;
}
.inquiry-popup__intro p {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.5;
}

.inquiry-popup-fade-enter-active,
.inquiry-popup-fade-leave-active {
  transition: opacity $duration-fast $ease-out-soft;
}
.inquiry-popup-fade-enter-from,
.inquiry-popup-fade-leave-to {
  opacity: 0;
}

@media (max-width: 480px) {
  .inquiry-popup {
    padding: 0.85rem;
  }
  .inquiry-popup__panel {
    max-height: 92vh;
    border-radius: $radius-lg;
    padding: 1.5rem 1.25rem;
  }
  .inquiry-popup__close {
    top: 1rem;
    right: 1rem;
    width: 32px;
    height: 32px;
  }
  .inquiry-popup__intro {
    padding-right: 2.25rem;
  }
  .inquiry-popup__intro h3 {
    font-size: 1.25rem;
  }
}
</style>
