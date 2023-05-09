import { defineStore } from "pinia";
import { ref } from "vue";
import { setAuthorization } from "@/util/request";
import type { NSUser } from "./types";

export const useUserStore = defineStore("user", () => {
  const token = ref<string>("");
  const info = ref<NSUser.IUserInfo>({
    id: "",
    name: "",
    avatar: "",
    menus: [],
    modules: [],
  });

  const setToken = (tk: string) => {
    token.value = tk;
    setAuthorization(tk);
    sessionStorage.setItem("token", tk);
  };

  const setUserInfo = (userInfo: NSUser.IUserInfo) => {
    info.value = userInfo;
  };

  return {
    token,
    info,
    setToken,
    setUserInfo,
  };
});
