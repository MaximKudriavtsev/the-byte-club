import { User, Variant, Quiz, QuestionType } from './types';

export const mockUsers: User[] = [
  { id: 1, name: 'Dmitry Morozov', isAdmin: false },
  { id: 2, name: 'Nastya Morozov', isAdmin: false },
  { id: 3, name: 'Max Morozov', isAdmin: false },
  { id: 4, name: 'Tony Morozov', isAdmin: false },
  { id: 5, name: 'Serg Morozov', isAdmin: false },
];

export const mockVariants: Variant[] = [
  { id: 1, questionId: 1, text: 'Вариант 1', isRight: true },
  { id: 2, questionId: 1, text: 'Вариант 2', isRight: false },
  { id: 3, questionId: 1, text: 'Вариант 3', isRight: false },
  { id: 4, questionId: 1, text: 'Вариант 4', isRight: true },
];

export const mockQuestions: QuestionType[] = [
  { id: 1, quizId: 1, title: 'Вопрос 1', variants: mockVariants, time: 10, value: 100 },
  { id: 2, quizId: 1, title: 'Вопрос 2', variants: mockVariants, time: 10, value: 100 },
  { id: 3, quizId: 1, title: 'Вопрос 3', variants: mockVariants, time: 10, value: 100 },
  { id: 4, quizId: 1, title: 'Вопрос 4', variants: mockVariants, time: 10, value: 100 },
];

export const mockQuiz: Quiz = { id: 1, title: 'Квиз про пиво', questions: mockQuestions };
