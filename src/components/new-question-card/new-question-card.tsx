import React, { FC, useState } from 'react';
import Paper from '@mui/material/Paper';
import { cloneDeep } from 'lodash';
import { Grid, TextField, Typography } from '@mui/material';

import { SwitchRightVariant } from './switch-right-variant/switch-right-variant';
import { VariantAnswer } from './variant-answer/variant-answer';
import { Question } from '../../api/types';

import './new-question-card.scss';

interface NewQuestionCardProps {
  setQuizQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
  currentIndex: number;
  quizQuestions: Question[];
}
const NewQuestionCard: FC<NewQuestionCardProps> = ({
  setQuizQuestions,
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
            setQuizQuestions(prevState => {
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
                  setQuizQuestions(prevState => {
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
                onChange={(event: any) => {
                  debugger;
                  const value = event.target.checked;

                  setQuizQuestions(prevState => {
                    const prevValue = prevState[currentIndex].variants[index].isRight;
                    debugger;
                    if (
                      prevState[currentIndex].variants.reduce(
                        (acc, item) => (item.isRight ? (acc += 1) : acc),
                        0,
                      ) < 1 ||
                      (!value && prevValue)
                    ) {
                      const nextState = cloneDeep(prevState);

                      const nextValue = value;

                      nextState[currentIndex].variants[index].isRight = nextValue;
                      return nextState;
                    }
                    return prevState;
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
