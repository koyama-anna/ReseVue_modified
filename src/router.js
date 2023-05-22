
import { createRouter, createWebHashHistory } from 'vue-router';
import TheShopAll from "./components/TheShopAll.vue";
import TheShopInfo from "./components/TheShopInfo.vue";
import LoginForm from "./components/LoginForm.vue";
import ReserveDone from "./components/ReserveDone.vue";


const routes = [
{
    path: "/",
    name: "theshopall",
    component: TheShopAll,
},
{
    path:"/detail/:id",
    name:"theshopinfo",
    component: TheShopInfo,
},
{
    path:"/login",
    name:"loginform",
    component: LoginForm,
},
{
    path:"/done",
    name:"reservedone",
    component: ReserveDone,
}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('token')
    if (to.name == 'loginform') {
        if (isAuthenticated) {
            next({ name: 'theshopall' })
        }
        next()
    }
    if (!isAuthenticated) {
        next({ name: 'loginform' })
    } else {
        next()
    }
})
export default router;