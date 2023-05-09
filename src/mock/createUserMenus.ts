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
          title: "MG1 - MenuItem - 1",
          moduleId: "Module-A",
        },
        {
          id: nanoid(),
          title: "MG1 - MenuItem - 2",
          moduleId: "Module-B",
        },
        {
          id: nanoid(),
          title: "MG1 - MenuItem - 3",
          moduleId: "Module-C",
        },
      ],
    },
    {
      id: nanoid(),
      title: "MenuGroup - 2",
      menus: [
        {
          id: nanoid(),
          title: "MG2 - MenuItem - 1",
          moduleId: "Module-D",
        },
        {
          id: nanoid(),
          title: "MG2 - MenuItem - 2",
          moduleId: "Module-E",
        },
        {
          id: nanoid(),
          title: "MG2 - MenuItem - 3",
          moduleId: "Module-F",
        },
      ],
    },
    {
      id: nanoid(),
      title: "MenuGroup - 3",
      menus: [
        {
          id: nanoid(),
          title: "MG3 - MenuItem - 1",
          moduleId: "Module-G",
        },
        {
          id: nanoid(),
          title: "MG3 - MenuItem - 2",
          moduleId: "Module-H",
        },
        {
          id: nanoid(),
          title: "MG3 - MenuItem - 3",
          moduleId: "Module-I",
        },
      ],
    },
    {
      id: nanoid(),
      title: "MenuGroup - 4",
      menus: [
        {
          id: nanoid(),
          title: "MG4 - MenuItem - 1",
          moduleId: "Module-J",
        },
        {
          id: nanoid(),
          title: "MG4 - MenuItem - 2",
          moduleId: "Module-K",
        },
        {
          id: nanoid(),
          title: "MG4 - MenuItem - 3",
          moduleId: "Module-L",
        },
      ],
    },
  ];
  return MenuGroupList;
};
