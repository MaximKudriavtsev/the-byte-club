import { useEffect } from 'react';

import { createSocketConnection } from './socket-service';

type Options = {
  type: 'MESSAGE';
  callBack: (payload: any) => void;
};

export const useSocket = ({ callBack }: Options) => {
  useEffect(() => {
    createSocketConnection('');

    window.Echo.private('').listen('message', (payload: any) => {
      callBack(payload);
    });

    return () => {
      window.Echo.leaveChannel(`private...`);
    };
  });
};
