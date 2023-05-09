export namespace NSUser {
  export interface IUserInfo {
    id: string;
    name: string;
    avatar: string;
    menus: NSMenu.TMenuGroupList;
    modules: NSModule.TModuleList;
  }
}

export namespace NSModule {
  export interface IModuleItem {
    id: string;
    name: string;
  }
  export type TModuleList = IModuleItem[];
}

export namespace NSMenu {
  export interface IMenuGroup {
    id: string;
    title: string;
    menus: TMenuList;
  }
  export type TMenuGroupList = IMenuGroup[];
  export interface IMenuItem {
    id: string;
    title: string;
    moduleId: string;
  }
  export type TMenuList = IMenuItem[];
}
