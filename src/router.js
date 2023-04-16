import Vue from "vue";
import VueRouter from "vue-router";
import TheShopAll from "../views/TheShopAll.vue";

Vue.use(VueRouter);

const routes = [
{
path: "/",
name: "theshopall",
component: TheShopAll,
},
]

const router = new VueRouter({
mode: "history",
base: process.env.BASE_URL,
routes,
});

export default router;