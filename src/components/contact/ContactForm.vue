<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ContactFormState } from '@/types'
import { SERVICES } from '@/constants/services'
import { BRANCHES } from '@/constants/site'
import BaseButton from '@/components/common/BaseButton.vue'

const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLScigZSCqNqhi_nBwLqqjD_4_InhJlbbKJlHwxDTIWLO_dWoFA/formResponse'

const GOOGLE_FORM_ENTRY_IDS = {
  name: 'entry.951687922',
  phone: 'entry.784103592',
  email: 'entry.1416894740',
  appointmentDate: 'entry.102779706',
  branch: 'entry.1323593925',
  service: 'entry.1342649478',
  message: 'entry.1706321510',
} as const

const dateInputRef = ref<HTMLInputElement | null>(null)

function openDatePicker() {
  dateInputRef.value?.showPicker?.()
}

const form = reactive<ContactFormState>({
  name: '',
  phone: '',
  email: '',
  appointmentDate: '',
  branch: '',
  service: '',
  message: '',
})
const isSubmitted = ref(false)
const isSubmitting = ref(false)
const hasError = ref(false)

async function handleSubmit() {
  isSubmitting.value = true
  hasError.value = false

  const body = new FormData()
  body.append(GOOGLE_FORM_ENTRY_IDS.name, form.name)
  body.append(GOOGLE_FORM_ENTRY_IDS.phone, form.phone)
  body.append(GOOGLE_FORM_ENTRY_IDS.email, form.email)
  body.append(GOOGLE_FORM_ENTRY_IDS.appointmentDate, form.appointmentDate)
  body.append(GOOGLE_FORM_ENTRY_IDS.branch, form.branch)
  body.append(GOOGLE_FORM_ENTRY_IDS.service, form.service)
  body.append(GOOGLE_FORM_ENTRY_IDS.message, form.message)

  try {
    await fetch(GOOGLE_FORM_ACTION, { method: 'POST', mode: 'no-cors', body })
    isSubmitted.value = true
  } catch {
    hasError.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <form v-if="!isSubmitted" class="contact-form" @submit.prevent="handleSubmit">
    <div class="contact-form__row">
      <div class="contact-form__field">
        <label for="name">Full Name <span class="contact-form__required">*</span></label>
        <input id="name" v-model="form.name" type="text" required placeholder="Enter Your Full Name" />
      </div>
      <div class="contact-form__field">
        <label for="phone">Mobile Number <span class="contact-form__required">*</span></label>
        <input id="phone" v-model="form.phone" type="tel" required placeholder="Phone Number" />
      </div>
    </div>
    <div class="contact-form__row">
      <div class="contact-form__field">
        <label for="email">Email ID</label>
        <input id="email" v-model="form.email" type="email" placeholder="Email Address" />
      </div>
      <div class="contact-form__field">
        <label for="appointmentDate">Appointment Date</label>
        <div class="contact-form__date-wrap">
          <input
            id="appointmentDate"
            ref="dateInputRef"
            v-model="form.appointmentDate"
            type="date"
            class="contact-form__date-input"
            :class="{ 'has-value': form.appointmentDate }"
            @click="openDatePicker"
          />
          <span v-if="!form.appointmentDate" class="contact-form__date-placeholder">Select Date</span>
          <svg
            class="contact-form__date-icon"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <rect x="3" y="4.5" width="18" height="16" rx="3" />
            <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
          </svg>
        </div>
      </div>
    </div>
    <div class="contact-form__row">
      <div class="contact-form__field">
        <label for="branch">Choose Branch</label>
        <select id="branch" v-model="form.branch">
          <option value="" disabled selected>Select Branch</option>
          <option v-for="branch in BRANCHES" :key="branch.name" :value="branch.name">{{ branch.name }}</option>
        </select>
      </div>
      <div class="contact-form__field">
        <label for="service">Choose Therapy</label>
        <select id="service" v-model="form.service">
          <option value="" disabled selected>Type Of Therapy</option>
          <option v-for="service in SERVICES" :key="service.id" :value="service.title">{{ service.title }}</option>
        </select>
      </div>
    </div>
    <div class="contact-form__field">
      <label for="message">Write Message</label>
      <textarea id="message" v-model="form.message" rows="5" placeholder="Write Message" />
    </div>
    <p v-if="hasError" class="contact-form__error">
      Something went wrong sending your inquiry. Please try again, or reach us directly on WhatsApp/phone.
    </p>
    <BaseButton type="submit" size="lg" :disabled="isSubmitting">
      {{ isSubmitting ? 'Sending…' : 'Send Inquiry' }}
    </BaseButton>
  </form>

  <div v-else class="contact-form__success is-visible">
    <span class="contact-form__success-icon">✓</span>
    <h3>Thank you, {{ form.name.split(' ')[0] || 'friend' }}.</h3>
    <p>Your inquiry has been received. Our care team will reach out within one business day.</p>
  </div>
</template>

<style scoped lang="scss">
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.contact-form__row {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: minmax(0, 1fr);
  @include respond(sm) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
}
.contact-form__field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 0;
}
.contact-form__field label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-dark);
}
.contact-form__required {
  color: #b3261e;
}
.contact-form__field input,
.contact-form__field select,
.contact-form__field textarea {
  width: 100%;
  min-width: 0;
  border: 1px solid var(--color-border);
  border-radius: $radius-sm;
  padding: 0.85rem 1rem;
  font-family: var(--font-body);
  font-size: 0.95rem;
  background: var(--color-white);
  color: var(--color-text-dark);
  transition:
    border-color $duration-fast $ease-out-soft,
    box-shadow $duration-fast $ease-out-soft;

  &:focus {
    outline: none;
    border-color: var(--color-nature-green);
    box-shadow: 0 0 0 4px rgba(127, 182, 133, 0.18);
  }
}
.contact-form__field textarea {
  resize: vertical;
}

.contact-form__date-wrap {
  position: relative;
}
.contact-form__field input.contact-form__date-input {
  color: transparent;
  padding-right: 2.75rem;

  &.has-value {
    color: var(--color-text-dark);
  }

  &::-webkit-calendar-picker-indicator {
    opacity: 0;
    cursor: pointer;
  }
}
.contact-form__date-placeholder {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9aa39c;
  font-size: 0.95rem;
  pointer-events: none;
}
.contact-form__date-icon {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-nature-green);
  pointer-events: none;
}

.contact-form__error {
  color: #b3261e;
  font-size: 0.9rem;
  margin: -0.5rem 0 0;
}

.contact-form__success {
  text-align: center;
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  animation: fadeInUp $duration-slow $ease-smooth both;
}
.contact-form__success-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color-nature-green);
  color: var(--color-white);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
</style>
