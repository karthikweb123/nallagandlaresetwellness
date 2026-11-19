<script setup lang="ts"></script>

<template>
  <RouterLink to="/contact" class="floating-book" aria-label="Book an appointment">
    <svg class="floating-book__icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8">
      <rect x="3" y="4" width="18" height="17" rx="3" />
      <path d="M3 9h18" />
      <path d="M8 2v4M16 2v4" />
      <path d="m8.5 13.5 2 2 4-4" />
    </svg>
    <span class="floating-book__label">Book Appointment</span>
  </RouterLink>
</template>

<style scoped lang="scss">
.floating-book {
  position: fixed;
  right: 1.75rem;
  bottom: 1.75rem;
  z-index: $z-overlay;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.9rem 1.4rem;
  border-radius: $radius-full;
  background: linear-gradient(120deg, var(--color-nature-green-dark), var(--color-nature-green-light));
  background-size: 180% 180%;
  background-position: 0% 0%;
  color: var(--color-white);
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: $shadow-medium;
  transition:
    transform $duration-fast $ease-out-soft,
    box-shadow $duration-fast $ease-out-soft,
    background-position $duration-base $ease-smooth;
  @include focus-ring;

  &:hover {
    background-position: 100% 100%;
    transform: translateY(-4px) scale(1.03);
    box-shadow: $shadow-elevated, $shadow-glow-green;
  }
}

.floating-book__icon {
  flex-shrink: 0;
}

@media (max-width: 767px) {
  .floating-book__label {
    display: none;
  }
  .floating-book {
    padding: 0.85rem;
  }
}
</style>
