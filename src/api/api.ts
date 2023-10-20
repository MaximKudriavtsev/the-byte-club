import { Quiz } from './types';

export type Api = {
  /**
   * GET: Возвращает список доступных квизов
   * Используем query params skip & take для пейджирования
   * @returns принимаем массив упрощенной модели данных квизов
   */
  getList: ({
    skip,
    take,
  }: {
    skip?: number;
    take?: number;
  }) => Promise<{ items: { id: number; title: string }[] }>;
  /**
   * GET: Получение всех данных о конкретном квизе по quizId
   */
  getQuiz: (quizId: number) => Promise<Quiz>;
  /**
   * POST: Старт новой сессии (комнаты)
   * Отправляем userId того, кто стартанул сессию
   * @returns
   */
  createQuizSession: (userId: number, quizId: number) => Promise<{ sessionId: number }>;
  /**
   * POST: Старт квиза внутри комнаты
   * После этого мы должны подключаться к web sockets
   * @returns
   */
  startQuizSession: (sessionId: number) => Promise<void>;
  /**
   * POST: Вступить в сессию квиза
   * @returns возвращает данные пользователя
   */
  enterQuizSession: (sessionId: number, userId: number) => Promise<void>;
  /**
   * POST: Покинуть сессию квиза
   */
  leaveQuizSession: (sessionId: number, userId: number) => Promise<void>;
  /**
   * POST: Отправка ответа пользователя на конкретный вопрос
   * @returns возвращает id правильного ответа на этот вопрос
   */
  answerQuestion: (
    sessionId: number,
    questionId: number,
    varianId: number,
    userId: number,
  ) => Promise<{ rightVariantId: number }>;
};
