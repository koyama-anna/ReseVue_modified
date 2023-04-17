import Vue from "vue";
import { createRouter, createWebHashHistory } from 'vue-router';
import TheShopAll from "./components/TheShopAll.vue";

Vue.use(VueRouter);

const routes = [
{
path: "/",
name: "theshopall",
component: TheShopAll,
},
]

const router = createRouter({

    history: createWebHashHistory(),

    routes

});

export default router;