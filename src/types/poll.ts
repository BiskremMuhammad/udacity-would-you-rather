export interface Poll {
  id: string;
  title: string;
  optionA: string;
  optionB: string;
  createdAt: Date;
  optionAVoters: string[];
  optionBVoters: string[];
}
