<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { NAV_LINKS } from '@/constants/navigation'
import { useScrollProgress } from '@/composables/useScrollProgress'
import { useActiveSection } from '@/composables/useActiveSection'
import LogoMark from '@/components/common/LogoMark.vue'
import BaseButton from '@/components/common/BaseButton.vue'

const route = useRoute()
const { isScrolled } = useScrollProgress()
const { activeId } = useActiveSection(['about', 'approach'])
const isMenuOpen = ref(false)

function closeMenu() {
  isMenuOpen.value = false
}

function isActive(link: (typeof NAV_LINKS)[number]) {
  if (link.to === '/') return route.path === '/' && !activeId.value
  if (link.isRoute) return route.path === link.to
  return `#${activeId.value}` === link.to.replace('/', '')
}
</script>

<template>
  <header class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="container navbar__inner">
      <RouterLink to="/" class="navbar__brand" @click="closeMenu">
        <LogoMark :size="56" />
        <span class="navbar__brand-text">
          <span class="navbar__brand-title">RESET</span>
          <span class="navbar__brand-subtitle">Wellness Center</span>
        </span>
      </RouterLink>

      <nav class="navbar__links" aria-label="Primary">
        <RouterLink
          v-for="link in NAV_LINKS"
          :key="link.label"
          :to="link.to"
          class="navbar__link"
          :class="{ 'navbar__link--active': isActive(link) }"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="navbar__actions">
        <BaseButton to="/contact" size="md" class="navbar__cta">Book Appointment</BaseButton>
        <button
          class="navbar__toggle"
          :class="{ 'navbar__toggle--open': isMenuOpen }"
          aria-label="Toggle menu"
          :aria-expanded="isMenuOpen"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span /><span /><span />
        </button>
      </div>
    </div>

    <transition name="mobile-menu">
      <nav v-if="isMenuOpen" class="navbar__mobile" aria-label="Mobile">
        <RouterLink
          v-for="link in NAV_LINKS"
          :key="link.label"
          :to="link.to"
          class="navbar__mobile-link"
          @click="closeMenu"
        >
          {{ link.label }}
        </RouterLink>
        <BaseButton to="/contact" size="lg" @click="closeMenu">Book Appointment</BaseButton>
      </nav>
    </transition>
  </header>
</template>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: $z-nav;
  padding-block: 1.4rem;
  transition:
    padding $duration-base $ease-smooth,
    box-shadow $duration-base $ease-smooth,
    background $duration-base $ease-smooth;
  @include glass(0.65, 18px);

  &--scrolled {
    padding-block: 0.75rem;
    box-shadow: $shadow-soft;
    @include glass(0.85, 22px);
  }
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.navbar__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
}
.navbar__brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}
.navbar__brand-title {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.14em;
  color: var(--color-text-dark);
}
.navbar__brand-subtitle {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  color: var(--color-text-muted);
}

.navbar__links {
  display: none;
  gap: 2.25rem;
  @include respond(lg) {
    display: flex;
  }
}

.navbar__link {
  position: relative;
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--color-text-muted);
  padding-block: 0.35rem;
  transition: color $duration-fast $ease-out-soft;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: var(--color-nature-green);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform $duration-base $ease-smooth;
  }

  &:hover {
    color: var(--color-nature-green-dark);
  }
  &:hover::after,
  &--active::after {
    transform: scaleX(1);
  }
  &--active {
    color: var(--color-nature-green-dark);
  }
}

.navbar__actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.navbar__cta {
  display: none;
  @include respond(md) {
    display: inline-flex;
  }
}

.navbar__toggle {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 42px;
  height: 42px;
  border: none;
  background: transparent;
  cursor: pointer;
  @include respond(lg) {
    display: none;
  }

  span {
    width: 100%;
    height: 2px;
    background: var(--color-text-dark);
    border-radius: 2px;
    transition:
      transform $duration-fast $ease-out-soft,
      opacity $duration-fast $ease-out-soft;
  }

  &--open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }
  &--open span:nth-child(2) {
    opacity: 0;
  }
  &--open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }
}

.navbar__mobile {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.5rem 1.5rem 2rem;
  @include glass(0.92, 24px);
}
.navbar__mobile-link {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text-dark);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity $duration-base $ease-smooth,
    transform $duration-base $ease-smooth;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
