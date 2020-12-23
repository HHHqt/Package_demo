import Vue from 'vue'
import VueRouter from 'vue-router'
import test from "../views/test";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'test',
    component: test

  },
]

const router = new VueRouter({
  routes
})

export default router
