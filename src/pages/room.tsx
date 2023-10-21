import React, { memo, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Layout } from '../components/layout';
import { Paper } from '@mui/material';
import { User } from '../api/types';
import { AvatarsStack } from '../components/avatars-stack/avatars-stack';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useMutation, useQuery } from 'react-query';
import productionApi from '../api/production';

import './room.scss';
import { Navigate, useNavigate } from 'react-router-dom';
import { ActionType, usePageContext } from '../store/context/page-context';
import { useSocket } from '../socket-service/socket-hook';

const users: User[] = [
  {
    id: 1,
    name: 'DmitryMorozov',
    isAdmin: true,
  },
  {
    id: 2,
    name: 'Max Kudr',
    isAdmin: true,
    image:
      'https://sun37-1.userapi.com/impg/3mge_x8OKZTJswN8w7XtPNxMuXYD7kabKtWzJQ/OEpwQcDow30.jpg?size=1439x2160&quality=96&sign=c4ab44275b5938d08f3ebc8f10cec423&type=album',
  },
  {
    id: 3,
    name: 'Tony Strap',
    isAdmin: true,
  },
  {
    id: 4,
    name: 'Dany Sydr',
    isAdmin: true,
  },
];

export const Room = memo(() => {
  const navigate = useNavigate();
  const { state, dispatch } = usePageContext();
  const { data: session, isLoading: isSessionLoading } = useQuery(
    'session',
    () => productionApi.getQuizSession(state.sessionId || 0),
    { enabled: !!state.sessionId },
  );
  const { data: quiz, isLoading } = useQuery(
    'quiz-id-1',
    () => productionApi.getQuiz(session?.quizId || 0),
    { enabled: !!session?.quizId },
  );

  const { mutate } = useMutation(() => productionApi.startQuizSession(state.sessionId || 0), {
    onSuccess: () => {
      setTimeout(() => {
        navigate('/question');
      }, 500);
    },
  });

  useSocket(state.sessionId);

  const runQuiz = () => {
    if (state.sessionId !== undefined && state.sessionId !== null) {
      mutate();
    }
  };

  useEffect(() => {
    if (quiz) {
      dispatch({ type: ActionType.SET_QUIZ, payload: quiz });
    }
  }, [quiz]);

  useEffect(() => {
    if (state.currentQuestionId) {
      navigate('/question');
    }
  }, [state.currentQuestionId]);

  useEffect(() => {
    if (!state.sessionId) {
      const urlParams = new URLSearchParams(window.location.search);
      const sessionId = urlParams.get('session_id') || null;
      dispatch({ type: ActionType.SET_SESSION_ID, payload: sessionId });
      if (state.user === null) {
        navigate('/auth');
      }
      return;
    }
  }, [state.sessionId, state.user]);

  return (
    <Layout>
      {isLoading || isSessionLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className='room-wrapper'>
            <h2>{quiz?.title}</h2>
            <Paper className='room-qr-wrapper'>
              {state.sessionId ? (
                <QRCodeSVG
                  value={`${window.location.href}?session_id=${state.sessionId}`}
                  className='room-qr'
                />
              ) : (
                <p>Не удалось создать комнату</p>
              )}
            </Paper>
            {state.user?.isAdmin ? (
              <Button
                variant='contained'
                endIcon={<ArrowForwardIosIcon />}
                onClick={() => runQuiz()}
                size='large'
                className='room-start-button'
              >
                Начать
              </Button>
            ) : (
              <p className='room-user-counter'>Ожидайте старта игры..</p>
            )}
          </div>
          <p className='room-user-counter'>{`Подключились ${users.length} человек(а)`}</p>
          <AvatarsStack users={users} className='room-user-avatars' />
        </>
      )}
    </Layout>
  );
});
