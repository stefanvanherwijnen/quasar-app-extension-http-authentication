import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: '/register',
        name: 'register',
        component: () => import('pages/auth/Register.vue')
      },
      {
        path: '/account',
        meta: { auth: true },
        name: 'account',
        component: { render: h => h('router-view') },
        children: [
          {
            path: 'home',
            name: 'accountHome',
            component: () => import('pages/auth/account/Home.vue')
          }
        ]
      },
      {
        path: '/admin',
        meta: { auth: ['administrator'] },
        name: 'admin',
        component: { render: h => h('router-view') },
        children: [
          {
            path: 'home',
            name: 'adminHome',
            component: () => import('pages/auth/admin/Home.vue')
          }
        ]
      },
      {
        path: '/superuser',
        meta: { auth: ['superuser'] },
        name: 'superuser',
        component: { render: h => h('router-view') },
        children: [
          {
            path: 'users',
            name: 'superuserUsers',
            component: () => import('pages/auth/superuser/Users.vue')
          }
        ]
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
