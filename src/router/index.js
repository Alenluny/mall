import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/home/Home')
  },
  {
    path: '/category',
    component: () => import('../views/category/Category')
  },
  {
    path: '/cart',
    component: () => import('../views/cart/Cart')
  },
  {
    path: '/profile',
    component: () => import('../views/profile/Profile')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//全局导航守卫
// router.beforeEach((to, from, next) => {
//   document.title = to.matched[0].meta.title,
//   next()
// })

export default router
