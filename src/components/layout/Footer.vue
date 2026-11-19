<script setup lang="ts">
import { NAV_LINKS } from '@/constants/navigation'
import { SITE, SOCIAL_LINKS, BRANCHES } from '@/constants/site'
import { SERVICES } from '@/constants/services'
import LogoMark from '@/components/common/LogoMark.vue'
import poweredByLogo from '@/assets/brand/poweredby-png.png'

const year = new Date().getFullYear()
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRANCHES[0].mapQuery)}`

function branchMapsHref(mapQuery: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`
}
</script>

<template>
  <footer class="footer">
    <div class="container footer__grid">
      <div class="footer__brand">
        <div class="footer__brand-row">
          <LogoMark :size="42" />
          <span class="footer__brand-text">RESET</span>
        </div>
        <p class="footer__tagline">{{ SITE.tagline }}</p>
        <div class="footer__socials">
          <a
            v-for="social in SOCIAL_LINKS"
            :key="social.label"
            :href="social.href"
            class="footer__social"
            target="_blank"
            rel="noopener"
            :aria-label="social.label"
          >
            <svg v-if="social.icon === 'instagram'" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
            </svg>
            <span v-else>{{ social.label.charAt(0) }}</span>
          </a>
          <a
            :href="mapsHref"
            class="footer__social"
            target="_blank"
            rel="noopener"
            aria-label="Open our location in Google Maps"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z" />
              <circle cx="12" cy="9.5" r="2.4" />
            </svg>
          </a>
        </div>
      </div>

      <div class="footer__col">
        <h3>Quick Links</h3>
        <ul>
          <li v-for="link in NAV_LINKS" :key="link.label">
            <RouterLink :to="link.to">{{ link.label }}</RouterLink>
          </li>
        </ul>
      </div>

      <div class="footer__col">
        <h3>Services</h3>
        <ul>
          <li v-for="service in SERVICES.slice(0, 5)" :key="service.id">
            <RouterLink to="/services">{{ service.title }}</RouterLink>
          </li>
        </ul>
      </div>

      <div class="footer__col footer__col--locations">
        <h3>Our Locations</h3>
        <ul class="footer__contact">
          <li>{{ SITE.phone }}</li>
        </ul>
        <ul class="footer__branches">
          <li v-for="branch in BRANCHES" :key="branch.name">
            <a :href="branchMapsHref(branch.mapQuery)" target="_blank" rel="noopener">
              <strong>{{ branch.name }}</strong>
              <span>{{ branch.address }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="container footer__bottom">
      <p>&copy; {{ year }} {{ SITE.name }}. All rights reserved.</p>
      <a
        href="https://www.socialsprout.in/"
        target="_blank"
        rel="noopener"
        class="footer__powered-by"
        aria-label="Powered by Social Sprout"
      >
        <span>Powered by</span>
        <img :src="poweredByLogo" alt="Social Sprout" />
      </a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: linear-gradient(180deg, #1b201d, #262b28);
  color: var(--color-text-on-dark);
  padding-block: 5rem 2rem;
}

.footer__grid {
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr;
  @include respond(md) {
    grid-template-columns: 1.2fr 0.8fr 0.8fr 1.6fr;
  }
}

.footer__brand-row {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 1rem;
}
.footer__brand-text {
  font-family: var(--font-heading);
  font-weight: 700;
  letter-spacing: 0.14em;
  font-size: 1.2rem;
}
.footer__tagline {
  color: rgba(238, 243, 234, 0.75);
  max-width: 320px;
  margin-bottom: 1.5rem;
}
.footer__socials {
  display: flex;
  gap: 0.75rem;
}
.footer__social {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  font-weight: 600;
  text-transform: uppercase;
  transition:
    background $duration-fast $ease-out-soft,
    transform $duration-fast $ease-out-soft;

  &:hover {
    background: var(--color-white);
    color: var(--color-nature-green-dark);
    transform: translateY(-3px);
  }
}

.footer__col h3 {
  color: var(--color-white);
  font-size: 1rem;
  margin-bottom: 1.1rem;
}
.footer__col ul {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}
.footer__col a,
.footer__contact li {
  color: rgba(238, 243, 234, 0.72);
  font-size: 0.95rem;
}
.footer__col a:hover {
  color: var(--color-nature-green-light);
}

.footer__branches {
  margin-top: 1.1rem;
  gap: 1rem !important;
}
.footer__branches li a {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.footer__branches strong {
  color: var(--color-white);
  font-size: 0.9rem;
}
.footer__branches span {
  font-size: 0.85rem;
  line-height: 1.4;
}

.footer__bottom {
  margin-top: 3.5rem;
  padding-top: 1.75rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  font-size: 0.85rem;
  color: rgba(238, 243, 234, 0.55);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  @include respond(sm) {
    flex-direction: row;
    justify-content: center;
    gap: 1.25rem;
  }
}

.footer__powered-by {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  opacity: 0.85;
  transition:
    opacity $duration-fast $ease-out-soft,
    transform $duration-fast $ease-out-soft;

  span {
    font-size: 0.78rem;
    color: rgba(238, 243, 234, 0.75);
  }

  img {
    height: 36px;
    width: 120px;
    display: block;
    object-fit: cover;
    object-position: 50% 48%;
  }

  &:hover {
    opacity: 1;
    transform: translateY(-1px);
  }
}
</style>
