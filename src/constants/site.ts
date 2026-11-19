import type { Branch, SocialLink } from '@/types'

export const SITE = {
  name: 'RESET Wellness Center',
  fullName: 'Reset Neurotherapy and Chiropractic Wellness Center',
  tagline: 'Realign. Repair. Rejuvenate.',
  phone: '+91 85230 95988',
} as const

export const BRANCHES: Branch[] = [
  {
    name: 'Miyapur',
    address: 'Madhava Nagar Colony, Ambedkar Nagar, Hafeezpet, Hyderabad, Telangana 500049',
    mapQuery: 'Reset Wellness Center, Madhava Nagar Colony, Ambedkar Nagar, Hafeezpet, Hyderabad',
  },
  {
    name: 'Madhapur',
    address:
      'Down Floor, SS Chamber Building, 313, Ayyappa Society Main Rd, near Datamites - Data Science & Analytics, Ayyappa Society, Megha Hills, Madhapur, Hyderabad, Telangana 500081',
    mapQuery: 'Reset Wellness Center, SS Chamber Building, Ayyappa Society, Madhapur, Hyderabad',
  },
  {
    name: 'Nallagandla',
    address:
      'Plot # 99D, Opposite to Aparna Sarovar, Nallagandla, Serilingampally, Hyderabad, Telangana, Pincode: 500019',
    mapQuery: 'Reset Wellness Center, Nallagandla, Serilingampally, Hyderabad',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/reset_wellness_center_hyd?igsh=cWR1MDB1a3F1eHZh', icon: 'instagram' },
]
