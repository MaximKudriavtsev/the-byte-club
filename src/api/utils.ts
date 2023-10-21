export const recursiveToCamel = (item: unknown): any => {
  if (Array.isArray(item)) {
    return item.map((el: unknown) => recursiveToCamel(el));
  } else if (typeof item === 'function' || item !== Object(item)) {
    return item;
  }
  return Object.fromEntries(
    Object.entries(item as Record<string, unknown>).map(([key, value]: [string, unknown]) => [
      key.replace(/([-_][a-z])/gi, c => c.toUpperCase().replace(/[-_]/g, '')),
      recursiveToCamel(value),
    ]),
  );
};

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
