const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('src/views/auth.vue'),
  },
  {
    path: `/restaurant/:id`,
    name: 'restaurant',
    component: () => import('src/views/home.vue'),
  },
]

export default routes
