import { Grid, Typography } from '@mui/material';
import React, { FC, ReactNode } from 'react';

import './../layout.scss';

type Props = {
  children: ReactNode;
  title?: string;
};

export const Layout: FC<Props> = ({ children, title = '' }) => {
  return (
    <Grid container height={'100vh'} alignItems='center' columns={{ xs: 32, sm: 24, md: 12 }}>
      <div className='fancy-border-wrapper'>
        <div className='fancy-border fancy-border-radius-1'></div>
        <div className='fancy-border fancy-border-radius-2'></div>
        <div className='fancy-border fancy-border-radius-3'></div>
      </div>
      <Grid item xs={32} sm={24} md={12} zIndex={1}>
        <Typography variant='h2' color='white' align='center'>
          {title}
        </Typography>
        {/* <img
                src='https://storage.yandexcloud.net/byte-club-bucket/logo-grad.png'
                className='layout-logo'
            /> */}
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid
        item
        xs={30}
        sm={22}
        md={10}
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};
