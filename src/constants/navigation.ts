import type { NavLink } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', to: '/', isRoute: true },
  { label: 'Services', to: '/services', isRoute: true },
  { label: 'Approach', to: '/#approach', isRoute: false },
  { label: 'About', to: '/#about', isRoute: false },
  { label: 'Contact', to: '/contact', isRoute: true },
]
