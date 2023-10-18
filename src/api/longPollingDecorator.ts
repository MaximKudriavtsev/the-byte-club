const sleep = async (ms: number) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  }).catch(() => {});

const WAITING_INTERVAL_MS = 10_000;

const longPollingDecorator = (callback: () => Promise<any>) => {
  const fetching = async (): Promise<any> => {
    const response = await callback();

    if (response.status == 504) {
      return await fetching();
    }

    if (response.status == 204) {
      await sleep(WAITING_INTERVAL_MS);
      return await fetching();
    }

    return response;
  };

  return fetching;
};

export default longPollingDecorator;
