import { defineStore } from "pinia";
import { ref } from "vue";
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
