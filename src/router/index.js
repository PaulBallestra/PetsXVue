import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dogs from '../views/Dogs.vue'
import Cats from '../views/Cats.vue'
import Pet from '../views/Pet.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dogs',
    name: 'Dogs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Dogs
  },
  {
    path: '/cats',
    name: 'Cats',
    component: Cats
  },
  {
    path: '/pets/dogs/:id',
    name: 'Dogs Pets',
    component: Pet
  },
  {
    path: '/pets/cats/:id',
    name: 'Cats Pets',
    component: Pet
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
