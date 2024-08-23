const route = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginView.vue')
    },
    {
        path: '/',
        name: 'layout',
        // 该导入组件的方法，可以实现组件的懒加载
        component: () => import('@/views/LayoutView.vue'),
        children: [
            {
                path: '',
                //注意这里的path，该效果为 路径为 / 时，layout和home页面同时显示(默认二级路由)
                component: () => import('@/views/HomeView.vue'),
                name: 'home'
            },
            {
                path: 'category/:id',
                name: 'category',
                component: () => import('@/views/CategoryView.vue'),

            },
            // 物品展示
            {
                path: 'categoryList/:id',
                name: 'categoryList',
                component: () => import('@/views/CategoryList.vue')
            },
            // 详细物品信息
            {
                path: 'goods/:id',
                name: 'goods',
                component: () => import('@/views/SubGoods.vue')
            }

        ]
    },


]
export default route