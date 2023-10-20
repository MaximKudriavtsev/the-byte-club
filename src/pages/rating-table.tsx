import React from 'react';
import { Typography } from '@mui/material';

import { Layout } from '../components/layout';
import { UsersTable } from '../components/users-table/users-table';

export const RatingTable = () => {
  return (
    <Layout>
      <Typography variant='h2' component='h2' align='center'>
        Результаты 🎉
      </Typography>

      <UsersTable />
    </Layout>
  );
};
