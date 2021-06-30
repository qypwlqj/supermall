import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component:Home
  },
  {
    path: '/class',
    name: 'Class',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Class/Class.vue')
  },
  {
    path:'/shoppingCart',
    component:() =>import('../views/Cart/ShoppingCart.vue')
  },
  {
    path:'/mine',
    component:() => import('../views/Profile/Mine.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
