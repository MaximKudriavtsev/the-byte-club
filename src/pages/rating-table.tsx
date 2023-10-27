import React, { useEffect } from 'react';
import { Typography } from '@mui/material';

import { Layout } from '../components/layout';
import { UsersTable } from '../components/users-table/users-table';
import productionApi from '../api/production';
import { useQuery } from 'react-query';
import { usePageContext } from '../context/page-context';

export const RatingTable = () => {
  return (
    <Layout>
      <br />
      <br />
      <Typography variant='h2' component='h2' align='center'>
        Результаты 🎉
      </Typography>

      <br />
      <br />
      <br />

      <UsersTable />
    </Layout>
  );
};
