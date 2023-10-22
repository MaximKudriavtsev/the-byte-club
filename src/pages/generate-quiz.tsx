import React, { useState } from 'react';
import { TextField, Typography } from '@mui/material';
import { Glass } from '../components/glass/glass';
import { Layout } from '../components/layout';

import { useNavigate } from 'react-router-dom';

import './generate-quiz.scss';
import productionApi from '../api/production';
import { LoadingButton } from '@mui/lab';

export const GenerateQuiz = () => {
  const [quizTextToGenerate, setQuizTextToGenerate] = useState('');
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const generateCustomQuiz = () => {
    setLoading(true);
    if (quizTextToGenerate) {
      productionApi.generateQuiz(quizTextToGenerate.toString()).then(data => {
        setLoading(false);
        navigate('/quiz-list');
      });
    }
  };

  return (
    <Layout>
      <Glass className='generate-quiz'>
        <div className='generate-quiz-title'>
          <Typography variant='h5' component='h5' align='center'>
            Сгенерируйте свой квиз, на тему
          </Typography>
        </div>

        <div className='generate-quiz-input'>
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

        <div className='generate-quiz-button-wrapper'>
          <LoadingButton
            variant='contained'
            onClick={() => generateCustomQuiz()}
            size='large'
            className='generate-quiz-button'
            disabled={!quizTextToGenerate}
            loading={isLoading}
          >
            Сгенерировать
          </LoadingButton>
        </div>
      </Glass>
    </Layout>
  );
};
