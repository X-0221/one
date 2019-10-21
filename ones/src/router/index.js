import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const login = () =>
    import ("../pages/login.vue")
const index = () =>
    import ("../pages/index.vue")
const manage = () =>
    import ("../pages/manage.vue")
const manageList = () =>
    import ("../pages/manageList.vue")
const manageAdd = () =>
    import ("../pages/manageAdd.vue")
export default new Router({
    routes: [{
            path: '/index',
            component: index,
            name: "欢迎！",
            children: [{
                path: "manage",
                component: manage,
                children: [{
                    path: "",
                    component: manageList,
                    name: "管理员管理"
                }, {
                    path: "add",
                    component: manageAdd,
                    name: "添加管理员"
                }]
            }]
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '*',
            component: login
        }
    ]
})