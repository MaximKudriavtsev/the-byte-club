import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router-dom';
import productionApi from '../api/production';
import { ActionType, usePageContext } from '../store/context/page-context';
import { Layout } from '../components/layout';
import { TextField, Typography } from '@mui/material';

import './auth.scss';

export const Auth = () => {
  const navigate = useNavigate();
  const [localUserName, setLocalUserName] = useState(localStorage.getItem('userName') || '');
  const { dispatch } = usePageContext();

  const {
    data: user,
    isLoading,
    mutate: sendUserData,
  } = useMutation(() => productionApi.authUser(localUserName));

  useEffect(() => {
    if (user) {
      dispatch({ type: ActionType.SET_USER, payload: user });
      navigate('/quiz-list');
    }
  }, [user]);

  return (
    <Layout>
      <div className='auth'>
        <Typography variant='h2' component='h2' align='center'>
          Привет!
        </Typography>

        <br />

        <Typography variant='h4' component='h4' align='center'>
          Давай знакомиться
        </Typography>

        <br />
        <br />
        <br />

        <TextField
          fullWidth
          placeholder='Введи своё имя'
          variant='outlined'
          value={localUserName}
          onChange={e => {
            setLocalUserName(e.target.value);
            localStorage.setItem('userName', e.target.value);
          }}
        />

        <br />
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
    </Layout>
  );
};
