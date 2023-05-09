import { nanoid } from "nanoid";
import type { NSModule } from "@/types";

export default () => {
  const UserModules: NSModule.TModuleList = [
    {
      id: nanoid(),
      name: "Module-A",
    },
    {
      id: nanoid(),
      name: "Module-B",
    },
    {
      id: nanoid(),
      name: "Module-C",
    },
    {
      id: nanoid(),
      name: "Module-D",
    },
    {
      id: nanoid(),
      name: "Module-E",
    },
    {
      id: nanoid(),
      name: "Module-F",
    },
    {
      id: nanoid(),
      name: "Module-G",
    },
    {
      id: nanoid(),
      name: "Module-H",
    },
    {
      id: nanoid(),
      name: "Module-I",
    },
    {
      id: nanoid(),
      name: "Module-J",
    },
    {
      id: nanoid(),
      name: "Module-K",
    },
    {
      id: nanoid(),
      name: "Module-L",
    },
  ];
  return UserModules;
};
