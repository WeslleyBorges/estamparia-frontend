import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import store from '../store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {requiresAuth: true}
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      console.log('TA AUTENTICADO')
      next()
      return
    }
    next('/')
  }
  else
    next()
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => !record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next("/home");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router
