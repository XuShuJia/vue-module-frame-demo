import { onBeforeMount } from "vue";
import { ElLoading } from "element-plus";
// import request from "@/util/request";
// import {
//   UserLoginByTokenApiPath,
//   type IUserLoginApiRqeData,
//   type IUserLoginApiResData,
// } from "./api/UserLoginApi";
import type { useUserStore } from "@/store";
import { createLoginResData } from "@/mock";

export default (userStore: ReturnType<typeof useUserStore>) => {
  onBeforeMount(async () => {
    if (!userStore.token && sessionStorage.getItem("token")) {
      const loading = ElLoading.service({
        text: "Loading",
      });
      const { user, token } = await createLoginResData();
      userStore.setToken(token);
      userStore.setUserInfo(user);
      loading.close();
    }
  });
};
