import queryString from 'query-string';

import { checkIfError, parseToJson, logError } from './utils';
import { Api } from './api';

const REMOTE_HOST = 'remote-ip';
const URL = process.env.MODE === 'production' ? '/api' : `${REMOTE_HOST}/api`;

export const productionApi: Api = {
  getList: ({ skip, take }) => {
    return fetch(`${URL}/list/?${queryString.stringify({ skip, take })}`, {
      method: 'GET',
    })
      .then(checkIfError)
      .then(parseToJson)
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
    })
      .then(checkIfError)
      .then(parseToJson)
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
    })
      .then(checkIfError)
      .then(parseToJson)
      .catch(logError);
  },
  /**
   * POST: Покинуть сессию квиза
   */
  leaveQuizSession: (sessionId: number, userId: number) => {
    return fetch(`${URL}/session/${sessionId}/leave`, {
      method: 'POST',
      body: JSON.stringify({ userId }),
    })
      .then(checkIfError)
      .then(parseToJson)
      .catch(logError);
  },
  /**
   * POST: Отправка ответа пользователя на конкретный вопрос
   * @returns возвращает id правильного ответа на этот вопрос
   */
  answerQuestion: (sessionId: number, questionId: number, varianId: number, userId: number) => {
    return fetch(`${URL}/session/${sessionId}/answer`, {
      method: 'POST',
      body: JSON.stringify({ questionId, varianId, userId }),
    })
      .then(checkIfError)
      .then(parseToJson)
      .catch(logError);
  },
};

export default productionApi;
