import type { NSUser } from "@/types";

export const UserLoginApiPath = "/user/login";
export const UserLoginByTokenApiPath = "/user/login/token";

export interface IUserLoginApiRqeData {
  account: string;
  password: string;
}

export interface IUserLoginApiResData {
  user: NSUser.IUserInfo;
  token: string;
}
