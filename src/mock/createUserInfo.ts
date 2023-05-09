import { nanoid } from "nanoid";
import type { NSUser } from "@/types";
import createUserMenus from "./createUserMenus";
import createUserModules from "./createUserModules";

export default () => {
  const UserInfo: NSUser.IUserInfo = {
    id: nanoid(),
    name: "Demo",
    avatar: "/default.jpg",
    menus: createUserMenus(),
    modules: createUserModules(),
  };
  return UserInfo;
};
