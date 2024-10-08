import { createRouter, createWebHistory } from 'vue-router'
import route from '@/route/index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: route,
  // routes: [
  //   {
  //     path: '/login',
  //     name: 'login',
  //     component: () => import('../views/LoginView.vue')
  //   },
  //   {
  //     path: '/',
  //     name: 'layout',
  //     // 该导入组件的方法，可以实现组件的懒加载
  //     component: () => import('../views/LayoutView.vue'),
  //     children: [
  //       {
  //         path: '',
  //         //注意这里的path，该效果为 路径为 / 时，layout和home页面同时显示(默认二级路由)
  //         component: () => import('@/views/HomeView.vue')
  //       },
  //       {
  //         path: 'category',
  //         component: () => import('@/views/CategoryView.vue')
  //       },
  //     ]
  //   },

  // ]
  scrollBehavior() {
    return {
      top: 0  //路由切换时回到页面顶部
    }
  }
})

export default router
