import { UserVote } from "../redux/actions/polls-actions";
import { Poll } from "../types/poll";
import { User } from "../types/user";

const users: User[] = [
  {
    id: "chrisevans",
    name: "Chris Evans",
    avatar:
      "https://i.pinimg.com/originals/c8/f1/46/c8f14613fdfd69eaced69d0f1143d47d.jpg",
  },
  {
    id: "robert",
    name: "Robert Downey Jr",
    avatar:
      "https://i.pinimg.com/236x/f1/85/93/f18593284614db880a6f0ab6c5b9b843.jpg",
  },
  {
    id: "rere",
    name: "Rihanna",
    avatar:
      "https://i.pinimg.com/564x/8f/e6/d5/8fe6d5d62b8cb570e746f41ca82cf725.jpg",
  },
];

const questions: Poll[] = [
  {
    id: "8xf0y6ziyjabvozdd253nd",
    author: users.find((u) => u.id === "chrisevans") as User,
    createdAt: new Date(1467166872634),
    optionA: "have horrible short term memory",
    optionAVoters: ["chrisevans"],
    optionB: "have horrible long term memory",
    optionBVoters: [],
  },
  {
    id: "6ni6ok3ym7mf1p33lnez",
    author: users.find((u) => u.id === "rere") as User,
    createdAt: new Date(1468479767190),
    optionA: "become a superhero",
    optionAVoters: [],
    optionB: "become a supervillain",
    optionBVoters: ["rere", "chrisevans"],
  },
  {
    id: "am8ehyc8byjqgar0jgpub9",
    author: users.find((u) => u.id === "chrisevans") as User,
    createdAt: new Date(1488579767190),
    optionA: "be telekinetic",
    optionAVoters: [],
    optionB: "be telepathic",
    optionBVoters: ["chrisevans"],
  },
  {
    id: "loxhs1bqm25b708cmbf3g",
    author: users.find((u) => u.id === "robert") as User,
    createdAt: new Date(1482579767190),
    optionA: "be a front-end developer",
    optionAVoters: [],
    optionB: "be a back-end developer",
    optionBVoters: ["chrisevans"],
  },
  {
    id: "vthrdm985a262al8qx3do",
    author: users.find((u) => u.id === "robert") as User,
    createdAt: new Date(1489579767190),
    optionA: "find $50 yourself",
    optionAVoters: ["robert"],
    optionB: "have your best friend find $500",
    optionBVoters: ["rere"],
  },
  {
    id: "xj352vofupe1dqz9emx13r",
    author: users.find((u) => u.id === "rere") as User,
    createdAt: new Date(1493579767190),
    optionA: "write JavaScript",
    optionAVoters: ["rere"],
    optionB: "write Swift",
    optionBVoters: ["robert"],
  },
];

export function _getUsers(): Promise<User[]> {
  return new Promise((res, rej) => {
    setTimeout(() => res([...users]), 1000);
  });
}

export function _getQuestions(): Promise<Poll[]> {
  return new Promise((res, rej) => {
    setTimeout(() => res([...questions]), 1000);
  });
}

export function _saveQuestion(question: Poll): Promise<Poll> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const q: Poll = { ...question, createdAt: new Date(Date.now()) };
      questions.push(q);
      res(q);
    }, 1000);
  });
}

export function _saveQuestionAnswer(vote: UserVote): Promise<UserVote> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(vote);
    }, 500);
  });
}
