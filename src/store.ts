import { defineStore } from "pinia";
import { ref } from "vue";
import { setAuthorization } from "@/util/request";
import type { NSMenu, NSModule, NSUser } from "./types";

export const useThemeModeStore = defineStore("Theme", () => {
  const mode = ref<"light" | "dark">(
    (() => {
      let theme: "light" | "dark" = "light";
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        theme = "dark";
      }
      document.documentElement.setAttribute("theme", theme);
      document.documentElement.dataset.theme = theme;
      return theme;
    })()
  );

  const switchThemeMode = () => {
    const theme = mode.value === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("theme", theme);
    document.documentElement.dataset.theme = theme;
    mode.value = theme;
  };
  const setLightTheme = () => {
    mode.value = "light";
    document.documentElement.setAttribute("theme", "light");
    document.documentElement.dataset.theme = "light";
  };
  const setDarkTheme = () => {
    mode.value = "dark";
    document.documentElement.setAttribute("theme", "dark");
    document.documentElement.dataset.theme = "dark";
  };

  return {
    mode,
    switchThemeMode,
    setLightTheme,
    setDarkTheme,
  };
});

export const useUserStore = defineStore("User", () => {
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

export const useMenuModuleStore = defineStore("MenuModule", () => {
  const userStore = useUserStore();
  const menuActive = ref<NSMenu.IMenuItem | null>(null);
  const moduleTabList = ref<NSModule.TModuleList>([]); // 存放模块的标签，但标签对应的模块可以没有载入。
  const moduleTabActive = ref<NSModule.IModuleItem | null>(null); // 载入并显示的模块对应的标签（只有一个
  const moduleRenderedList = ref<NSModule.TModuleList>([]); // 已载入的模块列表

  // 在点击MenuSideBar中的菜单时调用
  function setMenuActive(menu: NSMenu.IMenuItem) {
    const module = userStore.info.modules.filter(
      ({ id }) => id === menu.moduleId
    )[0];
    if (module) {
      if (
        !moduleTabList.value.find(({ id }) => id === menu.moduleId)
      ) {
        moduleTabList.value.push(module);
      }
      if (
        !moduleRenderedList.value.find(({ id }) => id === module.id)
      ) {
        moduleRenderedList.value.push(module);
      }
      moduleTabActive.value = module;
    }
    menuActive.value = menu;
  }
  // 在点击ModuleTab中的标签时调用
  function setModuleTabActive(module: NSModule.IModuleItem) {
    if (userStore.info.modules.find(({ id }) => id === module.id)) {
      userStore.info.menus.forEach((group) => {
        group.menus.forEach((menu) => {
          if (menu.moduleId === module.id) {
            menuActive.value = menu;
          }
        });
      });
      if (
        !moduleRenderedList.value.find(({ id }) => id === module.id)
      ) {
        moduleRenderedList.value.push(module);
      }
      moduleTabActive.value = module;
    }
  }
  // 点击ModuleTab中的标签的关闭按钮时调用
  function closeModule(module: NSModule.IModuleItem) {
    if (userStore.info.modules.find(({ id }) => id === module.id)) {
      let nextRenderedModuleId = "";
      if (module.id === moduleTabActive.value?.id) {
        moduleTabList.value.forEach(({ id }, index) => {
          if (id === module.id) {
            if (moduleTabList.value[index - 1]) {
              nextRenderedModuleId =
                moduleTabList.value[index - 1].id;
            } else if (moduleTabList.value[index + 1]) {
              nextRenderedModuleId =
                moduleTabList.value[index + 1].id;
            }
          }
        });
      }
      moduleTabList.value = moduleTabList.value.filter(
        ({ id }) => id !== module.id
      );
      moduleRenderedList.value = moduleRenderedList.value.filter(
        ({ id }) => id !== module.id
      );
      if (moduleTabList.value.length === 0) {
        menuActive.value = null;
        return;
      }
      if (nextRenderedModuleId) {
        userStore.info.menus.forEach((group) => {
          group.menus.forEach((menu) => {
            if (menu.moduleId === nextRenderedModuleId) {
              setMenuActive(menu);
            }
          });
        });
      }
    }
  }

  return {
    menuActive,
    moduleTabList,
    moduleTabActive,
    moduleRenderedList,
    setMenuActive,
    setModuleTabActive,
    closeModule,
  };
});
