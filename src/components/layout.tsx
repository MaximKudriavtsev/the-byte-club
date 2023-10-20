import { Grid } from '@mui/material';
import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        {children}
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};
