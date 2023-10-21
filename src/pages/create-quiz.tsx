import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import productionApi from '../api/production';
import { ActionType, usePageContext } from '../store/context/page-context';
import { Layout } from '../components/layout';
import Paper from "@mui/material/Paper";
import {Grid} from '@mui/material';
import Button from "@mui/material/Button";

import './create-quiz.scss';
export const CreateQuiz = () => {
  const [localUser] = useState('');
  const { dispatch } = usePageContext();
  const { data: user } = useQuery('auth', () => productionApi.authUser(localUser));

  useEffect(() => {
    if (user) {
      dispatch({ type: ActionType.SET_USER, payload: user });
    }
  }, [user]);

  const addNewQuiz = () => {
    console.log(`Add new quiz`);
  };

  const saveNewQuiz = () => {
    console.log(`Save new quiz`);
  };

  return (
    <Layout>
      <div className='create-quiz-wrapper'>
        <Grid container spacing={2} className='create-quiz'>
          <Grid item xs={10} className='create-quiz-body'>
            <Paper elevation={3} className='create-quiz-body-set-title'>
              Новый тайтл
            </Paper>
            <Paper elevation={3} className='create-quiz-body-set-description'>
              Новое описание
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper elevation={3} className='create-quiz-controls'>
              <div className='create-quiz-controls-add'>
                <Button
                  variant='contained'
                  onClick={() => addNewQuiz()}
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
