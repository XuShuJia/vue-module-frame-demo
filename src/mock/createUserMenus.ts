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
          title: "Module-A",
          moduleId: "Module-A",
        },
        {
          id: nanoid(),
          title: "Module-B",
          moduleId: "Module-B",
        },
        {
          id: nanoid(),
          title: "Module-C",
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
          title: "Module-D",
          moduleId: "Module-D",
        },
        {
          id: nanoid(),
          title: "Module-E",
          moduleId: "Module-E",
        },
        {
          id: nanoid(),
          title: "Module-F",
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
          title: "Module-G",
          moduleId: "Module-G",
        },
        {
          id: nanoid(),
          title: "Module-H",
          moduleId: "Module-H",
        },
        {
          id: nanoid(),
          title: "Module-I",
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
          title: "Module-J",
          moduleId: "Module-J",
        },
        {
          id: nanoid(),
          title: "Module-K",
          moduleId: "Module-K",
        },
        {
          id: nanoid(),
          title: "Module-L",
          moduleId: "Module-L",
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
          moduleId: "Module-M",
        },
        {
          id: nanoid(),
          title: "Module-N",
          moduleId: "Module-N",
        },
        {
          id: nanoid(),
          title: "Module-O",
          moduleId: "Module-O",
        },
      ],
    },
  ];
  return MenuGroupList;
};
