import { useEffect } from 'react';

import { createSocketConnection } from './socket-service';
import { ActionType, usePageContext } from '../store/context/page-context';
import { RatingTableRow } from '../api/types';

type WsAction = {
  action: 'start' | 'rating';
  table?: RatingTableRow[];
  current_question_id?: number;
};

export const useSocket = (sessionId: number | null) => {
  const { dispatch } = usePageContext();

  useEffect(() => {
    createSocketConnection();

    if (sessionId !== null) {
      window.Echo.channel(`room-${sessionId}`).listen('StartAction', (payload: WsAction) => {
        console.log('start question: ', payload);
        if (payload.action === 'start') {
          dispatch({
            type: ActionType.SET_CURRENT_QUESTION_ID,
            payload: payload.current_question_id,
          });
        } else if (payload.action === 'rating') {
          dispatch({ type: ActionType.SET_TABLE, payload: payload.table });
        }
      });

      // window.Echo.channel(`room-${sessionId}`).listen('Rating', (payload: any) => {
      //   console.log('rating: ', payload);
      //   dispatch({ type: ActionType.SET_CURRENT_QUESTION_ID, payload });
      // });
    }

    return () => {
      window.Echo.leaveChannel(`room-${sessionId}`);
    };
  }, [sessionId]);
};
