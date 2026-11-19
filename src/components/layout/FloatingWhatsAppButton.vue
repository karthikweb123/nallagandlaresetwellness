<script setup lang="ts">
const whatsappHref = 'https://wa.me/918523095988'
</script>

<template>
  <a
    :href="whatsappHref"
    class="floating-whatsapp"
    target="_blank"
    rel="noopener"
    aria-label="Chat with us on WhatsApp"
  >
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path
        d="M17.47 14.38c-.29-.15-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.15-.2.29-.75.93-.92 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.48.1-.2.05-.36-.02-.51-.08-.15-.65-1.57-.9-2.15-.24-.57-.48-.5-.65-.5-.17 0-.36-.02-.56-.02s-.51.08-.78.36c-.26.29-1.02 1-1.02 2.43 0 1.43 1.05 2.82 1.19 3.01.15.2 2.05 3.13 4.96 4.39.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.11.55-.08 1.7-.7 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.2-.55-.34z"
      />
      <path
        d="M12.02 2C6.5 2 2 6.48 2 12c0 1.86.5 3.6 1.38 5.11L2 22l5.02-1.32A9.96 9.96 0 0 0 12.02 22C17.55 22 22 17.52 22 12S17.55 2 12.02 2zm0 18.18c-1.67 0-3.23-.47-4.56-1.28l-.33-.2-3.02.79.8-2.94-.21-.32A8.15 8.15 0 0 1 3.82 12c0-4.53 3.68-8.2 8.2-8.2 4.52 0 8.2 3.67 8.2 8.2 0 4.53-3.68 8.18-8.2 8.18z"
      />
    </svg>
  </a>
</template>

<style scoped lang="scss">
.floating-whatsapp {
  position: fixed;
  right: 1.75rem;
  bottom: 6.5rem;
  z-index: $z-overlay;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: var(--color-white);
  background: #25d366;
  box-shadow: $shadow-medium;
  transition:
    transform $duration-fast $ease-out-soft,
    box-shadow $duration-fast $ease-out-soft;
  @include focus-ring;

  &:hover {
    transform: translateY(-4px);
    box-shadow: $shadow-elevated;
  }
}
</style>
