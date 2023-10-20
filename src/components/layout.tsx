import { Grid } from '@mui/material';
import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={1} sm={2}></Grid>
      <Grid item xs={10} sm={8}>
        {children}
      </Grid>
      <Grid item xs={1} sm={2}></Grid>
    </Grid>
  );
};
