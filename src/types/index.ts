export interface NavLink {
  label: string
  to: string
  isRoute: boolean
}

export interface Service {
  id: string
  image: string
  title: string
  description: string
  longDescription: string
  whoNeedsIt: string[]
  benefits: string[]
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export interface Branch {
  name: string
  address: string
  mapQuery: string
}

export interface ContactFormState {
  name: string
  phone: string
  email: string
  appointmentDate: string
  branch: string
  service: string
  message: string
}
