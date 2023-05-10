import { nanoid } from "nanoid";
import type { NSMenu } from "@/types";

export default () => {
  const MenuGroupList: NSMenu.TMenuGroupList = [
    {
      id: nanoid(),
      title: "MenuGroup - 1",
      menus: [
        {
          id: nanoid(),
          title: "首页",
          moduleId: "ModuleA",
        },
        {
          id: nanoid(),
          title: "模块功能",
          moduleId: "ModuleB",
        },
        {
          id: nanoid(),
          title: "Module-C",
          moduleId: "ModuleC",
        },
      ],
    },
    {
      id: nanoid(),
      title: "MenuGroup - 2",
      menus: [
        {
          id: nanoid(),
          title: "Module-D",
          moduleId: "ModuleD",
        },
        {
          id: nanoid(),
          title: "Module-E",
          moduleId: "ModuleE",
        },
        {
          id: nanoid(),
          title: "Module-F",
          moduleId: "ModuleF",
        },
      ],
    },
    {
      id: nanoid(),
      title: "MenuGroup - 3",
      menus: [
        {
          id: nanoid(),
          title: "Module-G",
          moduleId: "ModuleG",
        },
        {
          id: nanoid(),
          title: "Module-H",
          moduleId: "ModuleH",
        },
        {
          id: nanoid(),
          title: "Module-I",
          moduleId: "ModuleI",
        },
      ],
    },
    {
      id: nanoid(),
      title: "MenuGroup - 4",
      menus: [
        {
          id: nanoid(),
          title: "Module-J",
          moduleId: "ModuleJ",
        },
        {
          id: nanoid(),
          title: "Module-K",
          moduleId: "ModuleK",
        },
        {
          id: nanoid(),
          title: "Module-L",
          moduleId: "ModuleL",
        },
      ],
    },
    {
      id: nanoid(),
      title: "MenuGroup - 5",
      menus: [
        {
          id: nanoid(),
          title: "Module-M",
          moduleId: "ModuleM",
        },
        {
          id: nanoid(),
          title: "Module-N",
          moduleId: "ModuleN",
        },
        {
          id: nanoid(),
          title: "Module-O",
          moduleId: "ModuleO",
        },
      ],
    },
  ];
  return MenuGroupList;
};
