import Vue from 'vue';
import Router from 'vue-router';
// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(Router);

//3. 创建 router 实例，然后传 `routes` 配置，这里直接在里面传入路由
//export命令用于规定模块的对外接口。
//与export default命令的区别：import命令接受一对大括号，里面指定要从其他模块导入的变量名。
//大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同。
//本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。
//export default命令，为模块指定默认输出。不需要用大括号来指定名称了
export default new Router({
    routes: [
        //dashboard挡泥板，表示默认显示的界面，这里表当地址位/时跳转到挡泥板
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
            path: '/',
            //定义 (路由) 组件。
            //这里从其他文件 import 进来
            /*
            * () => 是定义匿名函数，这里的意思是，在函数中导入如下地址的组件
            *
            * */
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/table',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/Member.vue'),
                    meta: { title: '会员界面' }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: () => import(/* webpackChunkName: "chart" */ '../components/page/Statistic.vue'),
                    meta: { title: '统计数据' }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                },
                {
                    path: '/card',
                    name:'card',
                    component: () => import(/* webpackChunkName: "card" */ '../components/page/card.vue'),
                    meta: { title: '会员卡' }
                }
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
