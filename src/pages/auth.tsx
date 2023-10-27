import React, { useEffect, useState, memo } from 'react';
import { useMutation } from 'react-query';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router-dom';
import productionApi from '../api/production';
import { ActionType, usePageContext } from '../context/page-context';
import { Layout } from '../components/layout';
import { TextField, Typography } from '@mui/material';

import './auth.scss';
import { Glass } from '../components/glass/glass';

export const Auth = memo(() => {
  const navigate = useNavigate();
  const [localUserName, setLocalUserName] = useState('');
  const { state, dispatch } = usePageContext();

  const {
    data: user,
    isLoading,
    mutate: sendUserData,
  } = useMutation(() => productionApi.authUser(localUserName, state?.sessionId || undefined));

  useEffect(() => {
    if (user) {
      dispatch({ type: ActionType.SET_USER, payload: user });
      if (state.sessionId) {
        navigate('/room');
      } else {
        navigate('/quiz-list');
      }
    }
  }, [user]);

  return (
    <Layout>
      <Glass className='auth'>
        <div className='auth-content auth-text-wrapper'>
          <Typography className='auth-text ' variant='h2' component='h2' align='center'>
            Привет!
          </Typography>

          <br />
        </div>
        <div className='auth-content auth-inputs-wrapper'>
          <Typography variant='h6' component='h6' align='left'>
            Давай знакомиться
          </Typography>
          <br />
          <TextField
            fullWidth
            placeholder='Введи своё имя'
            variant='outlined'
            value={localUserName}
            onChange={e => {
              setLocalUserName(e.target.value);
            }}
          />

          <br />
          <br />

          <LoadingButton
            fullWidth
            variant='contained'
            disabled={!localUserName}
            loading={isLoading}
            onClick={() => sendUserData()}
          >
            Начать!
          </LoadingButton>
        </div>
      </Glass>
    </Layout>
  );
});
