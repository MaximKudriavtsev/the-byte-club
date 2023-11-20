import React from 'react';

export const stringToColor = (string: string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
};

export const formatToK = (num: string | number) => {
  const n = +num;
  return Math.abs(n) > 999
    ? Math.sign(n) * +(Math.abs(n) / 1000).toFixed(0) + 'k'
    : Math.sign(n) * Math.abs(n);
};

export const scrollToEnd = (ref: React.RefObject<HTMLDivElement>) => {
  ref.current?.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
};
