import React from 'react';
import { Typography } from '@mui/material';

import { Layout } from '../components/layout';
import { UsersTable } from '../components/users-table/users-table';
import productionApi from '../api/production';
import { useQuery } from 'react-query';

export const RatingTable = () => {
  const { data, isLoading } = useQuery('quiz-id-1', () => productionApi.getQuiz(1));

  console.log('quiz-id-1', data);

  return (
    <Layout>
      <Typography variant='h2' component='h2' align='center'>
        Результаты 🎉
      </Typography>

      <UsersTable />
    </Layout>
  );
};
