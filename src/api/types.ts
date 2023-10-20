export type User = {
  id: string;
  name: string;
  image?: string;
  isAdmin: boolean;
};

export type Quiz = {
  id: string;
  title: string;
  questions: Question[];
};

export type Question = {
  id: string;
  title: string;
  variants: Variant[];
  time: number;
  image?: string;
  audio?: string;
  video?: string;
  value: number;
};

export type Variant = {
  id: string;
  text: string;
  isRight: boolean;
};

export type Answer = {
  userId: string;
  quizId: string;
  questionId: string;
  variantId: string;
  deltaTime: number; // ms
};

export type Websocket = {
  questionId: string;
};
