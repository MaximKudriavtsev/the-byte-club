import queryString from 'query-string';

import longPollingDecorator from './longPollingDecorator';

const REMOTE_HOST = 'remote-ip';
const URL = process.env.MODE === 'production' ? '/api' : `${REMOTE_HOST}/api`;

const checkIfError = async (res: Response) => {
  if (res.ok) {
    return res;
  }

  const data = await res.json();

  const error = new Error(`${res.statusText}: ${data.message}`);
  error.name = res.status.toString();
  throw error;
};
const logError = (error: any) => {
  console.warn('Error while fetching result from server:' + error);
  throw error;
};
const parseToJson = (res: Response) => res.json();

const productionApi = {
  postData: (data: any) => {
    const fetching = longPollingDecorator(() =>
      fetch(`${URL}/data`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }),
    );
    return fetching().then(checkIfError).then(parseToJson).catch(logError);
  },

  getData: (params: any) => {
    return fetch(`${URL}/data/?${queryString.stringify(params)}`, {
      method: 'GET',
    })
      .then(checkIfError)
      .then(parseToJson)
      .catch(logError);
  },
};

export default productionApi;
