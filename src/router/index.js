import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AllColorMeaningView from '@/views/AllColorMeaningView.vue'
import ColorPersonalityQuizView from '@/views/ColorPersonalityQuizView.vue'
import ColorPersonalityResultsView from '@/views/ColorPersonalityResultsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/all_color_meaning',
      name: 'allcolormeaning',
      component: AllColorMeaningView
    },
    {
      path: '/color_personality_quiz',
      name: 'colorpersonalityquiz',
      component: ColorPersonalityQuizView
    },
    {
      path: '/color_personality_results',
      name: 'colorpersonalityresults',
      component: ColorPersonalityResultsView
    }
  ]
})

export default router
