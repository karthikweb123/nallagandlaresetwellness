import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/pages/HomePage.vue'),
        meta: { title: 'RESET Wellness Center | Reset Your Mind. Rebuild Your Body. Renew Your Life.' },
      },
      {
        path: 'services',
        name: 'services',
        component: () => import('@/pages/ServicesPage.vue'),
        meta: { title: 'Our Services | RESET Wellness Center' },
      },
      {
        path: 'services/:id',
        name: 'service-detail',
        component: () => import('@/pages/ServiceDetailPage.vue'),
        meta: { title: 'Our Services | RESET Wellness Center' },
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/pages/ContactPage.vue'),
        meta: { title: 'Contact Us | RESET Wellness Center' },
      },
      {
        path: ':pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/pages/NotFoundPage.vue'),
        meta: { title: 'Page Not Found | RESET Wellness Center' },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 96 }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const title = to.meta.title as string | undefined
  document.title = title ?? 'RESET Wellness Center'
})

export default router
