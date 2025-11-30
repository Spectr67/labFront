import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import CountryList from '@/pages/CountryList.vue'
import AboutUs from '@/pages/AboutUs.vue'
import CountryItem from '@/pages/CountryItem.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/CountryList/',
      component: CountryList,
    },
    {
      path: '/CountryItem/:name',
      name: 'CountryItem',
      component: CountryItem,
    },
    {
      path: '/aboutUs/',
      component: AboutUs,
    },
  ],
})

export default router
