import { nanoid } from "nanoid";
import type { IUserLoginApiResData } from "@/pages/Login/api/UserLoginApi";
import createUserMenus from "./createUserMenus";
import createUserModules from "./createUserModules";

export default () => {
  return new Promise<IUserLoginApiResData>((resolve) => {
    setTimeout(() => {
      const LoginResData: IUserLoginApiResData = {
        user: {
          id: nanoid(),
          name: "DD",
          avatar: "/default-avatar.jpg",
          menus: createUserMenus(),
          modules: createUserModules(),
        },
        token: `tk${nanoid()}`,
      };
      resolve(LoginResData);
    }, 1000);
  });
};
