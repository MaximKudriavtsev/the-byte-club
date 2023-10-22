import { useEffect } from 'react';

import { createSocketConnection } from './socket-service';
import { ActionType, usePageContext } from '../store/context/page-context';
import { RatingTableRow } from '../api/types';

type WsAction = {
  message: {
    action: 'start' | 'rating';
    table?: RatingTableRow[];
    current_question_id?: number;
  };
};

export const useSocket = (sessionId: number | null) => {
  const { dispatch } = usePageContext();

  useEffect(() => {
    createSocketConnection();

    if (sessionId !== null) {
      window.Echo.channel(`room-${sessionId}`).listen('StartAction', (payload: WsAction) => {
        console.log('start question: ', payload);
        if (payload.message.action === 'start') {
          dispatch({
            type: ActionType.SET_CURRENT_QUESTION_ID,
            payload: payload.message.current_question_id,
          });
          dispatch({ type: ActionType.SET_TABLE, payload: payload.message.table });
        } else if (payload.message.action === 'rating') {
          dispatch({ type: ActionType.SET_TABLE, payload: payload.message.table });
          dispatch({ type: ActionType.SET_CURRENT_QUESTION_ID, payload: null });
        } else if (payload.message.action === 'table') {
          dispatch({ type: ActionType.SET_TABLE, payload: payload.message.table });
        }
      });
    }

    return () => {
      window.Echo.leaveChannel(`room-${sessionId}`);
    };
  }, [sessionId]);
};
