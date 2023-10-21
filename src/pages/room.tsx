import React, { memo, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Layout } from '../components/layout';
import { Paper } from '@mui/material';
import { User } from '../api/types';
import { AvatarsStack } from '../components/icons-stack/avatars-stack';
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
  const { state, dispatch } = usePageContext();
  const navigate = useNavigate();
  const { data: quiz, isLoading } = useQuery('quiz-id-1', () => productionApi.getQuiz(1));

  const { mutate } = useMutation(() => productionApi.startQuizSession(state.sessionId || 0));

  useSocket(state.sessionId);

  const runQuiz = () => {
    if (state.sessionId !== undefined && state.sessionId !== null) {
      mutate();

      // TODO: Должны запускать ws соединение
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

  return (
    <Layout>
      {state.user === null && <Navigate to='/auth' />}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className='room-wrapper'>
            <h2>{quiz?.title}</h2>
            <Paper className='room-qr-wrapper'>
              <QRCodeSVG value='https://vk.com/id30412729/' className='room-qr' />
            </Paper>
            <Button
              variant='contained'
              endIcon={<ArrowForwardIosIcon />}
              onClick={() => runQuiz()}
              size='large'
              className='room-start-button'
            >
              Начать
            </Button>
          </div>
          <p className='room-user-counter'>{`Подключились ${users.length} человек(а)`}</p>
          <AvatarsStack users={users} className='room-user-avatars' />
        </>
      )}
    </Layout>
  );
});
