import React, { memo, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Layout } from '../components/layout';
import { Paper, Typography } from '@mui/material';
import { AvatarsStack } from '../components/avatars-stack/avatars-stack';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useMutation, useQuery } from 'react-query';
import productionApi from '../api/production';
import { useCopyToClipboard } from '@uidotdev/usehooks';

import './room.scss';
import { useNavigate } from 'react-router-dom';
import { ActionType, usePageContext } from '../store/context/page-context';
import { useSocket } from '../socket-service/socket-hook';
import { Glass } from '../components/glass/glass';
import { Loader } from '../components/loader/loader';

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

  const [, copyToClipboard] = useCopyToClipboard();

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
    if (state.currentQuestionId && !state.user.isAdmin) {
      if (state.user.isAdmin) {
        navigate('/rating');
      } else {
        navigate('/question');
      }
    }
  }, [state.currentQuestionId, state.user]);

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

  const users = state.table.map(row => ({
    id: row.userId,
    name: row.name,
    image: '',
    isAdmin: false,
  }));

  const roomLink = `${window.location.href}?session_id=${state.sessionId}`;

  return (
    <Layout>
      {isLoading || isSessionLoading ? (
        <Loader />
      ) : (
        <div className='room-wrapper'>
          <Typography variant='h2' align='center'>
            {quiz?.title}
          </Typography>
          <Paper className='room-qr-wrapper'>
            {state.sessionId ? (
              <QRCodeSVG value={roomLink} className='room-qr' />
            ) : (
              <p>Не удалось создать комнату</p>
            )}
          </Paper>
          {state.user?.isAdmin ? (
            <>
              <Button
                variant='contained'
                endIcon={<ArrowForwardIosIcon />}
                onClick={() => runQuiz()}
                size='large'
                className='room-start-button'
              >
                Начать
              </Button>
              <br />
            </>
          ) : (
            <p className='room-user-counter'>Ожидайте старта игры..</p>
          )}
          <Button
            variant='contained'
            color='secondary'
            endIcon={<ContentCopyIcon />}
            onClick={() => copyToClipboard(roomLink)}
            size='large'
            className='room-start-button'
          >
            Cсылка на комнату
          </Button>
          {users?.length === 0 ? (
            <p className='room-user-counter'>Ожидание подключения игроков...</p>
          ) : (
            <p className='room-user-counter'>{`Присоединились ${users.length} человек(а)`}</p>
          )}
          {users?.length > 0 && (
            <Glass className='room-user-avatars'>
              <AvatarsStack users={users} />
            </Glass>
          )}
        </div>
      )}
    </Layout>
  );
});
