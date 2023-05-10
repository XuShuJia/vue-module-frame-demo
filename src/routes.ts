import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useUserStore } from "./store";

const Login = () => import("@/pages/Login");
const Main = () => import("@/pages/Main");
const NoMatch = () => import("@/pages/NoMatch");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    name: "main",
    path: "/main/:moduleId?/:data?",
    component: Main,
    beforeEnter() {
      const userStore = useUserStore();
      if (!userStore.token && !localStorage.getItem("token")) {
        return { name: "login", replace: true };
      }
    },
  },
  {
    name: "login",
    path: "/login",
    component: Login,
    beforeEnter() {
      const userStore = useUserStore();
      if (userStore.token) {
        return { name: "main", replace: true };
      }
    },
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
