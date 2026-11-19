<script setup lang="ts">
import { ref } from 'vue'
import type { FaqItem } from '@/types'

defineProps<{ items: FaqItem[] }>()
const openId = ref<string | null>(null)

function toggle(id: string) {
  openId.value = openId.value === id ? null : id
}
</script>

<template>
  <div class="faq-accordion">
    <div v-for="item in items" :key="item.id" class="faq-accordion__item">
      <button
        class="faq-accordion__question"
        :aria-expanded="openId === item.id"
        @click="toggle(item.id)"
      >
        <span>{{ item.question }}</span>
        <span class="faq-accordion__icon" :class="{ 'faq-accordion__icon--open': openId === item.id }">+</span>
      </button>
      <transition name="faq">
        <p v-if="openId === item.id" class="faq-accordion__answer">{{ item.answer }}</p>
      </transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
.faq-accordion__item {
  border-bottom: 1px solid var(--color-border);
}

.faq-accordion__question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.4rem 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--color-text-dark);
  @include focus-ring;
}

.faq-accordion__icon {
  font-size: 1.3rem;
  color: var(--color-nature-green);
  transition: transform $duration-fast $ease-out-soft;
  flex-shrink: 0;
}
.faq-accordion__icon--open {
  transform: rotate(45deg);
}

.faq-accordion__answer {
  padding-bottom: 1.4rem;
  color: var(--color-text-muted);
}

.faq-enter-active,
.faq-leave-active {
  transition:
    opacity $duration-fast $ease-out-soft,
    transform $duration-fast $ease-out-soft;
}
.faq-enter-from,
.faq-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
