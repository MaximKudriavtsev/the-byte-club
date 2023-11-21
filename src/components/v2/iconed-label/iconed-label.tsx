import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { Paper } from '../paper/paper';

interface IconedLabelProps {
  icon: React.ReactNode;
  text: string;
}

const IconedLabel: FC<IconedLabelProps> = ({ icon, text }) => {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        p: 0.6,
        minWidth: 80,
      }}
    >
      {icon}
      <Typography>{text}</Typography>
    </Paper>
  );
};

export { IconedLabel };
