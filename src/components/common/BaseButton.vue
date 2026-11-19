<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'md' | 'lg'
    to?: string
    href?: string
    type?: 'button' | 'submit'
  }>(),
  { variant: 'primary', size: 'md', type: 'button' },
)
</script>

<template>
  <RouterLink v-if="to" :to="to" class="btn" :class="[`btn--${variant}`, `btn--${size}`]">
    <span class="btn__label"><slot /></span>
  </RouterLink>
  <a v-else-if="href" :href="href" class="btn" :class="[`btn--${variant}`, `btn--${size}`]">
    <span class="btn__label"><slot /></span>
  </a>
  <button v-else :type="type" class="btn" :class="[`btn--${variant}`, `btn--${size}`]">
    <span class="btn__label"><slot /></span>
  </button>
</template>

<style scoped lang="scss">
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  border-radius: $radius-full;
  cursor: pointer;
  font-family: var(--font-body);
  font-weight: 600;
  letter-spacing: 0.01em;
  transition:
    transform $duration-fast $ease-out-soft,
    box-shadow $duration-fast $ease-out-soft,
    background-position $duration-base $ease-smooth,
    background-color $duration-fast $ease-out-soft,
    border-color $duration-fast $ease-out-soft;
  @include focus-ring;

  &:hover {
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(-1px);
  }
}

.btn--md {
  padding: 0.85rem 1.75rem;
  font-size: 0.95rem;
}
.btn--lg {
  padding: 1.05rem 2.25rem;
  font-size: 1.02rem;
}

.btn--primary {
  color: var(--color-white);
  background: linear-gradient(120deg, var(--color-nature-green-dark), var(--color-nature-green-light));
  background-size: 180% 180%;
  background-position: 0% 0%;
  box-shadow: $shadow-medium;

  &:hover {
    background-position: 100% 100%;
    box-shadow: $shadow-elevated, $shadow-glow-green;
  }
}

.btn--secondary {
  color: var(--color-nature-green-dark);
  background: var(--color-white);
  border: 1px solid var(--color-border);
  box-shadow: $shadow-soft;

  &:hover {
    border-color: var(--color-nature-green-light);
    box-shadow: $shadow-medium;
  }
}

.btn--ghost {
  color: var(--color-white);
  @include glass(0.12, 12px);
  border: 1px solid rgba(255, 255, 255, 0.4);

  &:hover {
    background: rgba(255, 255, 255, 0.22);
  }
}
</style>
