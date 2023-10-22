import React, {useState} from 'react';

import Paper from '@mui/material/Paper';
import {TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";

import { Layout } from '../components/layout';

import './generate-quiz.scss';

export const GenerateQuiz = () => {
  const [quizTextToGenerate, setQuizTextToGenerate] = useState('');

  const generateCustomQuiz = () => {
    console.log('quizTextToGenerate: ', quizTextToGenerate);
  };

  return (
    <Layout>
        <Paper elevation={3} className='generate-quiz'>
          <div className="generate-quiz-title">
            <Typography variant='h5' component='h5' align='center'>
              Сгенерируйте свой квиз, на тему
            </Typography>
          </div>

          <div className="generate-quiz-input">
            <TextField
              fullWidth
              placeholder='Впишите ее тему сюда'
              variant='outlined'
              value={quizTextToGenerate}
              onChange={e => {
                setQuizTextToGenerate(e.target.value);
              }}
            />
          </div>

          <div className="generate-quiz-button-wrapper">
            <Button
              variant='contained'
              onClick={() => generateCustomQuiz()}
              size='large'
              className='generate-quiz-button'
              disabled={!quizTextToGenerate}
            >
              Сгенерировать
            </Button>
          </div>
        </Paper>
    </Layout>
  );
};
