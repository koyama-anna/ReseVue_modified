
import { createRouter, createWebHashHistory } from 'vue-router';
import TheShopAll from "./components/TheShopAll.vue";
import TheShopInfo from "./components/TheShopInfo.vue";
import LoginForm from "./components/LoginForm.vue";


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
}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;