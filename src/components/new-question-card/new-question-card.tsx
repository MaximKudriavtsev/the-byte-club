import React, { FC, useState } from 'react';
import Paper from '@mui/material/Paper';
import { cloneDeep } from 'lodash';
import { Grid, TextField, Typography } from '@mui/material';

import { SwitchRightVariant } from './switch-right-variant/switch-right-variant';
import { VariantAnswer } from './variant-answer/variant-answer';
import { Question } from '../../api/types';

import './new-question-card.scss';

interface NewQuestionCardProps {
  setQuizQuestion: (prevState: (prevState: any) => any) => void;
  currentIndex: number;
  quizQuestions: Question[];
}
const NewQuestionCard: FC<NewQuestionCardProps> = ({
  setQuizQuestion,
  currentIndex,
  quizQuestions,
}) => {
  const [newQuizQuestion, setNewQuizQuestion] = useState('');

  const currentQuestion = quizQuestions[currentIndex];

  return (
    <Paper elevation={3} className='new-question-card'>
      <div className='new-question-card-question'>
        <TextField
          fullWidth
          placeholder='Введите текст вопроса'
          variant='outlined'
          value={currentQuestion.title || newQuizQuestion}
          onChange={e => {
            setNewQuizQuestion(e.target.value);
            setQuizQuestion(prevState => {
              const nextState = cloneDeep(prevState);
              nextState[currentIndex].title = e.target.value;
              return nextState;
            });
          }}
        />
      </div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            {[0, 1, 2, 3].map(index => (
              <VariantAnswer
                key={index}
                value={currentQuestion.variants[index]?.text || ''}
                onChange={(value: any) => {
                  setQuizQuestion(prevState => {
                    const nextState = cloneDeep(prevState);
                    nextState[currentIndex].variants[index].text = value;
                    return nextState;
                  });
                }}
              />
            ))}
          </Grid>
          <Grid item xs={2}>
            {[0, 1, 2, 3].map(index => (
              <SwitchRightVariant
                key={index}
                value={currentQuestion.variants[index]?.isRight || false}
                onChange={(value: any) => {
                  setQuizQuestion(prevState => {
                    const nextState = cloneDeep(prevState);
                    nextState[currentIndex].variants[index].isRight = value;
                    return nextState;
                  });
                }}
              />
            ))}
          </Grid>
        </Grid>
      </div>
      <Typography variant='body2' align='center'>
        Только один вариант ответа может быть верным!
      </Typography>
    </Paper>
  );
};

export { NewQuestionCard };
