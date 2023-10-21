export const setLocalItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalItem = (key: string): any => {
  const item = localStorage.getItem(key);
  if (!!item) {
    return JSON.parse(item);
  }
  return null;
};
