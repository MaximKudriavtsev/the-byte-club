import React, { FC, useEffect } from 'react';
import { Quiz, User } from '../../api/types';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { useMutation } from 'react-query';
import productionApi from '../../api/production';
import { ActionType, usePageContext } from '../../store/context/page-context';
import { useNavigate } from 'react-router-dom';

import './quiz-card.scss';
import { Glass } from '../glass/glass';

interface QuizCardProps {
  user: User;
  quiz: Pick<Quiz, 'id' | 'title'>;
}

const QuizCard: FC<QuizCardProps> = ({ quiz, user }) => {
  const navigate = useNavigate();
  const { dispatch } = usePageContext();
  const { data, mutate } = useMutation(() => productionApi.createQuizSession(user.id, quiz.id));

  useEffect(() => {
    if (data) {
      dispatch({ type: ActionType.SET_SESSION_ID, payload: data.sessionId });
      dispatch({ type: ActionType.SET_USER, payload: { ...user, isAdmin: true } });
      navigate('/room');
    }
  }, [data]);

  return (
    <Glass className='quiz-card-wrapper'>
      <h3> {quiz.title}</h3>
      <div className='quiz-card-button-wrapper'>
        {user.isAdmin ? (
          <>
            <Fab color='primary' size='small' className='quiz-card-button'>
              <EditIcon />
            </Fab>
            <Fab color='warning' size='small' className='quiz-card-button'>
              <DeleteIcon />
            </Fab>
          </>
        ) : (
          <Button
            variant='contained'
            endIcon={<ArrowForwardIosIcon />}
            onClick={() => mutate()}
            size='small'
          >
            Начать
          </Button>
        )}
      </div>
    </Glass>
  );
};

export { QuizCard };
