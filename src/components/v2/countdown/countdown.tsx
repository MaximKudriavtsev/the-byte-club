import { Box, CircularProgress, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { themeColors } from '../../../theme/config.theme';
import { Avatar } from '../avatar/avatar';
import { User } from '../../../api/types';

interface CountdownProps {
  user?: User;
  time: number;
  lineWidth?: number;
  size?: number;
}

const Countdown: FC<CountdownProps> = ({ user, time, lineWidth = 2, size = 42 }) => {
  const [countdown, setCountdown] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdown => {
        if (countdown <= 0) {
          clearInterval(interval);
          return 0;
        }
        return countdown - 1;
      });
    }, 1000);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        height: size,
        width: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {user ? (
        <Avatar
          user={user}
          size={size - lineWidth * 0.07 * size}
          sx={{
            position: 'absolute',
            ':after': {
              background: themeColors.placeholder,
              content: "''",
              position: 'absolute',
              width: '100%',
              height: '100%',
            },
          }}
        />
      ) : null}
      <CircularProgress
        sx={{ color: themeColors.mainGradient, position: 'absolute' }}
        thickness={lineWidth}
        size={size}
        variant='determinate'
        value={(countdown / time) * 100}
      />
      <Typography sx={{ position: 'absolute', fontSize: size / 2.5 }} variant='h2' color='white'>
        {countdown}
      </Typography>
    </Box>
  );
};

export { Countdown };
