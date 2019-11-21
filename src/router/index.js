import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '@/components/Content.vue'
import About from '@/components/About.vue'
import MainContent from '@/components/content/MainContent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Content,
    children: [{
      path: '/snippet/:type/:id',
      name: 'snippet',
      component: MainContent
    }]
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
