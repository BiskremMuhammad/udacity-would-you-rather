export interface Poll {
  id: string;
  author: string;
  optionA: string;
  optionB: string;
  createdAt: Date;
  optionAVoters: string[];
  optionBVoters: string[];
}
