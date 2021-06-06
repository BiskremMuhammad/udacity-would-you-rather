import { createContext } from "react";
import { User } from "../types/user";

export interface Context {
  user: User | undefined;
}

export const UserContext = createContext<Context>({ user: undefined });
