import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Exercici3Component from '../components/Exercici3Component.vue'
import Exercici2Component from '../components/Exercici2Component.vue'
import Exercici1Component from '../components/Exercici1Component.vue'
import ProductDetail from '../components/ProductDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/exercici1',
      name: 'exercici1',
      component: Exercici1Component,
      children: [
        {
          path: '/exercici1/:productId',
          name: 'productDetail',
          component: ProductDetail,
          props: route => ({productId: route.params.productId}),
        }
      ]
    },
    {
      path: '/exercici2',
      name: 'exercici2',
      component: Exercici2Component
    },
    {
      path: '/exercici3',
      name: 'exercici3',
      component: Exercici3Component
      // component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
