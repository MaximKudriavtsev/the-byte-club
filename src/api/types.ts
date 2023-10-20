export type User = {
  id: number;
  name: string;
  image?: string;
  isAdmin: boolean;
};

export type Quiz = {
  id: number;
  title: string;
  questions: Question[];
};

export type Question = {
  id: number;
  quizId: number;
  title: string;
  variants: Variant[];
  time: number;
  image?: string;
  audio?: string;
  video?: string;
  value: number;
};

export type Variant = {
  id: number;
  questionId: number;
  text: string;
  isRight: boolean;
};

export type Answer = {
  userId: number;
  quizId: number;
  questionId: number;
  variantId: number;
  deltaTime: number; // ms
};

export type Websocket = {
  questionId: number;
};
