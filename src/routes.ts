import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";

const Login = () => import("@/pages/Login");
const Main = () => import("@/pages/Main");
const NoMatch = () => import("@/pages/NoMatch");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/main/:moduleId?/:data?",
    component: Main,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NoMatch,
  },
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
