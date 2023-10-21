import queryString from 'query-string';

import { checkIfError, parseToJson, logError, recursiveToCamel } from './utils';
import { Api } from './api';

const REMOTE_HOST = 'http://51.250.86.225'; // real prod
// const REMOTE_HOST = 'http://80.78.207.182:8000';
const URL = process.env.MODE === 'production' ? '/api' : `${REMOTE_HOST}/api`;

export const productionApi: Api = {
  authUser: name => {
    return fetch(`${URL}/auth`, {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(checkIfError)
      .then(parseToJson)
      .then(recursiveToCamel)
      .catch(logError);
  },
  getList: ({ skip, take }) => {
    return fetch(`${URL}/list?${queryString.stringify({ skip, take })}`, {
      method: 'GET',
    })
      .then(checkIfError)
      .then(parseToJson)
      .then(recursiveToCamel)
      .catch(logError);
  },
  /**
   * GET: Получение всех данных о конкретном квизе по quizId
   */
  getQuiz: quizId => {
    return fetch(`${URL}/quiz/${quizId}`, {
      method: 'GET',
    })
      .then(checkIfError)
      .then(parseToJson)
      .then(recursiveToCamel)
      .catch(logError);
  },
  /**
   * POST: Старт новой сессии (комнаты)
   * Отправляем userId того, кто стартанул сессию
   * @returns
   */
  createQuizSession: (userId: number, quizId: number) => {
    return fetch(`${URL}/quiz/${quizId}/create`, {
      method: 'POST',
      body: JSON.stringify({ userId }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(checkIfError)
      .then(parseToJson)
      .then(recursiveToCamel)
      .catch(logError);
  },
  /**
   * POST: Старт квиза внутри комнаты
   * После этого мы должны подключаться к web sockets
   * @returns
   */
  startQuizSession: (sessionId: number) => {
    return fetch(`${URL}/session/${sessionId}/start`, {
      method: 'POST',
    })
      .then(checkIfError)
      .then(parseToJson)
      .then(recursiveToCamel)
      .catch(logError);
  },
  /**
   * POST: Вступить в сессию квиза
   * @returns возвращает данные пользователя
   */
  enterQuizSession: (sessionId: number, userId: number) => {
    return fetch(`${URL}/session/${sessionId}/enter`, {
      method: 'POST',
      body: JSON.stringify({ userId }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(checkIfError)
      .then(parseToJson)
      .then(recursiveToCamel)
      .catch(logError);
  },
  /**
   * POST: Покинуть сессию квиза
   */
  leaveQuizSession: (sessionId: number, userId: number) => {
    return fetch(`${URL}/session/${sessionId}/leave`, {
      method: 'POST',
      body: JSON.stringify({ userId }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(checkIfError)
      .then(parseToJson)
      .then(recursiveToCamel)
      .catch(logError);
  },
  /**
   * POST: Отправка ответа пользователя на конкретный вопрос
   * @returns возвращает id правильного ответа на этот вопрос
   */
  answerQuestion: (
    sessionId: number,
    questionId: number,
    variantId: number,
    userId: number,
    delta: number,
  ) => {
    return fetch(`${URL}/session/${sessionId}/answer`, {
      method: 'POST',
      body: JSON.stringify({ questionId, variantId, userId, delta }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(checkIfError)
      .then(parseToJson)
      .then(recursiveToCamel)
      .catch(logError);
  },
  /**
   * POST: Отправка события для включения следующего вопроса внутри сессии
   * Отправляем со стороны админа сессии
   */
  switchQuestion: (sessionId: number) => {
    return fetch(`${URL}/session/${sessionId}/switch`, {
      method: 'POST',
    })
      .then(checkIfError)
      .then(parseToJson)
      .then(recursiveToCamel)
      .catch(logError);
  },
};

export default productionApi;
