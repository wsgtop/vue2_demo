import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/home.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import List from "@/views/list.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "List",
    component: List,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/HelloWorld",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/demo",
    name: "demo",
    component: () => import("@/views/demo/index.vue"),
  },
  {
    path: "/demo1",
    name: "demo1",
    component: () => import("@/views/demo/demo1.vue"),
  },
  {
    path: "/demo2",
    name: "demo2",
    component: () => import("@/views/demo/demo2.vue"),
  },
  {
    path: "/vueDemo",
    component: () => import("@/views/vueDemo/index.vue"),
  },
  {
    path: "/one",
    component: () => import("@/views/vueDemo/one.vue"),
  },
  {
    path: "/two",
    component: () => import("@/views/vueDemo/two.vue"),
  },
  {
    path: "/router1",
    name: "router1",
    component: () => import("@/views/router/index1.vue"),
  },
  {
    path: "/router2",
    component: () => import("@/views/router/index2.vue"),
  },
  {
    path: "/router3",
    component: () => import("@/views/router/index3.vue"),
  },
  {
    path: "/slot/slot2",
    component: () => import("@/components/slot/slot2.vue"),
  },
  {
    path: "/slot/slot3",
    component: () => import("@/components/slot/slot3.vue"),
  },
  {
    path: "/slot/slot4",
    component: () => import("@/components/slot/slot4.vue"),
  },
  {
    path: "/trans",
    component: () => import("@/components/transition/index.vue"),
  },
  {
    path: "/debounce",
    component: () => import("@/components/directives/debounce.vue"),
  },
  {
    path: "/img/svg",
    component: () => import("@/components/images/svg.vue"),
  },
  {
    path: "/store",
    component: () => import("@/views/store/index.vue"),
  },
  {
    path: "/layout",
    component: () => import("@/views/layout/list.vue"),
  },
  {
    path: "/layout/index1",
    component: () => import("@/views/layout/index1.vue"),
  },
  {
    path: "/layout/index2",
    component: () => import("@/views/layout/index2.vue"),
  },
  {
    path: "/layout/index3",
    component: () => import("@/views/layout/index3.vue"),
  },
  {
    path: "/layout/index4",
    component: () => import("@/views/layout/index4.vue"),
  },
  {
    path: "/layout/index5",
    component: () => import("@/views/layout/index5.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
