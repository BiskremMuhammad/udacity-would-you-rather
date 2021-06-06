import { User } from "./user";

export interface Poll {
  id: string;
  author: User;
  optionA: string;
  optionB: string;
  createdAt: Date;
  optionAVoters: string[];
  optionBVoters: string[];
}
