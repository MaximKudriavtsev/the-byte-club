import React, { FC } from 'react';
import { Quiz, User } from '../../api/types';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import './quiz-card.scss';

interface QuizCardProps {
  quiz: Quiz;
}

const QuizCard: FC<QuizCardProps> = ({ quiz }) => {
  const user: User = {
    id: 1,
    name: 'Dmitry Morozov',
    isAdmin: true,
  };

  const runQuiz = () => {
    console.log(`Run quiz ${quiz.id}`);
  };

  return (
    <Paper elevation={3} className='quiz-card-wrapper'>
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
            onClick={() => runQuiz()}
            size='small'
          >
            Начать
          </Button>
        )}
      </div>
    </Paper>
  );
};

export { QuizCard };
