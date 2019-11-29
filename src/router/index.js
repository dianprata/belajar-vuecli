import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddUser from '../views/AddUser'
import ViewUser from '../views/ViewUser'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/add-user',
    name: 'add-user',
    component: AddUser
  },
  {
    //path view user ada :id itu untuk membuat params pada router
    //:id akan sesuai dengan id yang ingin di view
    path: '/view/:id',
    name: 'view-user',
    component: ViewUser
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
