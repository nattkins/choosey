import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Situation from "../views/Situation.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/Situation/:sid",
        name: "Situation",
        component: Situation,
        props: true
    }
];

const router = new VueRouter({
    routes
});

export default router;