import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  }, {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  }, {
    path: '/loadingList',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'loadingList',
        component: () => import('@/views/loadingList/index'),
        meta: { title: 'Loading List', icon: 'truck-moving' }
      }
    ]
  }, {
    path: '/invoices',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'invoices',
        component: () => import('@/views/invoices/index'),
        meta: { title: 'Invoices', icon: 'file-invoice-dollar' }
      }
    ]
  }, {
    path: '/orders',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'orders',
        component: () => import('@/views/orders/index'),
        meta: { title: 'Orders', icon: 'shopping-bag' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
