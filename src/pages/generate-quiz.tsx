import React, {useState} from 'react';
import {TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {Glass} from "../components/glass/glass";
import { Layout } from '../components/layout';

import { useNavigate } from 'react-router-dom';

import './generate-quiz.scss';
import productionApi from "../api/production";

export const GenerateQuiz = () => {
  const [quizTextToGenerate, setQuizTextToGenerate] = useState('');
  const navigate = useNavigate();

  const generateCustomQuiz = () => {
    console.log('quizTextToGenerate: ', quizTextToGenerate);
    if(quizTextToGenerate){
      productionApi.generateQuiz(quizTextToGenerate.toString()).then((data) => {
          console.log('data from ANTOHA:', data);
          navigate('/quiz-list')
        }
      )
    }
  };

  return (
    <Layout>
      <Glass className='generate-quiz'>
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
      </Glass>
    </Layout>
  );
};
