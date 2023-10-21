import { useEffect } from 'react';

import { createSocketConnection } from './socket-service';

type Options = {
  callBack: (payload: any) => void;
};

export const useSocket = ({ callBack }: Options) => {
  useEffect(() => {
    createSocketConnection();

    // room-{session_id}
    window.Echo.channel('room').listen('StartQuestion', (payload: any) => {
      console.log('start question: ', payload);
      callBack(payload);
    });

    window.Echo.channel('room').listen('Rating', (payload: any) => {
      console.log('rating: ', payload);
      callBack(payload);
    });

    return () => {
      // room-{session_id}
      window.Echo.leaveChannel(`room`);
    };
  }, []);
};
