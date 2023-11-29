
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/attractions/', component: (PhuketAttractions) => import('src/pages/PhuketAttractions.vue') },
      { path: '/attractions/:at_id', component: (AttractionDetailed) => import('src/pages/AttractionDetailed.vue')}

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
