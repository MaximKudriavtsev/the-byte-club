export const checkIfError = async (res: Response) => {
  if (res.ok) {
    return res;
  }

  const data = await res.json();

  const error = new Error(`${res.statusText}: ${data.message}`);
  error.name = res.status.toString();
  throw error;
};
export const logError = (error: any) => {
  console.warn('Error while fetching result from server:' + error);
  throw error;
};
export const parseToJson = (res: Response) => res.json();
