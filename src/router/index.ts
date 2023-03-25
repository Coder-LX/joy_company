import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import("@/views/HomeView.vue")
const Solution = () => import("@/views/SolutionView.vue")
const AboutUs = () => import("@/views/AboutUs.vue")
const LinkUs = () => import("@/views/LinkToUs.vue")
const JoinUs = () => import("@/views/JoinUs.vue")


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,

    },
    {
      path: '/solution',
      name: 'solution',
      component: Solution,
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs,
    },
    {
      path: '/link-us',
      name: 'LinkUs',
      component: LinkUs,
    },
    {
      path: '/join-us',
      name: 'JoinUs',
      component: JoinUs,
    }
  ]
})

export default router
