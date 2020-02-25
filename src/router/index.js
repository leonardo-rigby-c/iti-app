import Vue from 'vue'
import VueRouter from 'vue-router'
import Cats from '../components/Cats.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/cats',
    name: 'Cats',
    component: Cats,
  },
  // {
  //   path: '/dashboard',
  //   component: Dashboard,
  //   beforeEnter: (to, from, next) => {
  //       const log = store.state.user.user;
  //       console.log(log);
  //       if (!log) next('/login')
  //       else next()
  //     }
  // },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: Login
  // },
  // {
  //   path: '/register',
  //   component: Register,
  //   meta: {
  //     requiresAuth: true
  //   }

]

const router = new VueRouter({
  routes
})


export default router
