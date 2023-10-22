import { Grid } from '@mui/material';
import React, { FC, ReactNode } from 'react';

import './layout.scss';

type Props = {
  children: ReactNode;
  header?: ReactNode;
};

export const Layout: FC<Props> = ({ children, header = null }) => {
  return (
    <div className='layout'>
      <div className='fancy-border-wrapper'>
        <div className='fancy-border fancy-border-radius-1'></div>
        <div className='fancy-border fancy-border-radius-2'></div>
        <div className='fancy-border fancy-border-radius-3'></div>
      </div>

      <Grid container height={'100vh'} className='layout-content'>
        <Grid item xs={12} className='layout-logo-wrapper'>
          <img
            src='https://storage.yandexcloud.net/byte-club-bucket/logo-grad.png'
            className='layout-logo'
          />
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={1} sm={2}></Grid>
        <Grid item xs={10} sm={8}>
          {children}
        </Grid>
        <Grid item xs={1} sm={2}></Grid>
      </Grid>
    </div>
  );
};
