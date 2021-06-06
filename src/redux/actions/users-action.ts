import { User } from "../../types/user";

export enum UsersActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

export interface UserAction {
  type: UsersActionTypes;
  payload?: User;
}
