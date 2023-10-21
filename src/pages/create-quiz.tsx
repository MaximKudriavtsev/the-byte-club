import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import productionApi from '../api/production';
import { ActionType, usePageContext } from '../store/context/page-context';
import { Layout } from '../components/layout';
import Paper from "@mui/material/Paper";
import {Grid, TextField, Typography} from '@mui/material';
import Button from "@mui/material/Button";

import './create-quiz.scss';
import {Question} from "../api/types";
import {NewQuestionCard} from "../components/new-question-card/new-question-card";

export const CreateQuiz = () => {
  const [localUser] = useState('');
  const { dispatch } = usePageContext();
  const { data: user } = useQuery('auth', () => productionApi.authUser(localUser));

  const [quizTitle, setQuizTitle] = useState('');
  const [quizQuestions, setQuizQuestion] = useState<Question[]>([]);

  useEffect(() => {
    if (user) {
      dispatch({ type: ActionType.SET_USER, payload: user });
    }
  }, [user]);

  const addNewQuestion = () => {
    let currentId = quizQuestions.length ? quizQuestions.length + 1 : 1;

    let newQuizQuestion = {
      id: currentId,
      quizId: 0,
      variants: [],
      time: 10,
      title: 'Введите вопрос',
      value: 1,
    }

    setQuizQuestion((prevQuizQuestions) => {
        return [...quizQuestions, newQuizQuestion]
    });
  };

  const saveNewQuiz = () => {
    let newQuiz = {
      id: 0,
      questions: quizQuestions,
      title: quizTitle,
    }

    console.log(`Save new quiz`, newQuiz);
  };

  return (
    <Layout>
      <div className='create-quiz-wrapper'>
        <Grid container spacing={2} className='create-quiz'>
          <Grid item xs={10} className='create-quiz-body'>
            <Paper elevation={3} className='create-quiz-body-set-title'>
              <Typography variant='h6' component='h6' align='left'>
                Название нового квиза:
              </Typography>
              <TextField
                fullWidth
                placeholder='Введите название для нового квиза'
                variant='outlined'
                value={quizTitle}
                onChange={e => {
                  setQuizTitle(e.target.value);
                }}
              />
            </Paper>

            {quizQuestions.map((question, index) => (
              <NewQuestionCard key={question.id + question.title} setQuizQuestion={setQuizQuestion} quizQuestions={quizQuestions} currentIndex={index}/>
            ))}

          </Grid>
          <Grid item xs={2}>
            <Paper elevation={3} className='create-quiz-controls'>
              <div className='create-quiz-controls-add'>
                <Button
                  variant='contained'
                  onClick={() => addNewQuestion()}
                  size='small'
                >
                  +
                </Button>
              </div>
              <div className='create-quiz-controls-save'>
                <Button
                  variant='contained'
                  onClick={() => saveNewQuiz()}
                  size='small'
                >
                  ✓
                </Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};
