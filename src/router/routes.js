const routes = [
  {
    path: '/',
    component: () => import('src/views/home'),
  },
  {
    path: `/restaurant/:id`,
    component: () => import('src/views/catalog.vue'),
  },
]

export default routes
