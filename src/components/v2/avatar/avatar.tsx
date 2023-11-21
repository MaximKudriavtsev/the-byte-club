import React, { FC } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { default as MaterialAvatar } from '@mui/material/Avatar';
import { User } from '../../../api/types';
import { stringToColor } from '../../utils';
import { SxProps, Typography } from '@mui/material';

interface AvatarProps {
  user: User;
  sx?: SxProps;
  size?: number;
}

function hasWhiteSpace(s: string) {
  return s.indexOf(' ') >= 0;
}

const Avatar: FC<AvatarProps> = ({ user, sx, size = 40 }) => {
  function stringAvatar(name: string) {
    const letters = hasWhiteSpace(name)
      ? `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
      : name.slice(0, 2).toLocaleUpperCase();
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: size,
        height: size,
        ...sx,
      },
      children: (
        <Typography sx={{ fontSize: size / 2.5 }} variant='h2'>
          {letters}
        </Typography>
      ),
    };
  }

  return (
    <Tooltip title={user.name}>
      {user.image ? (
        <MaterialAvatar
          sx={{ ...{ width: size, height: size }, ...sx }}
          alt={user.name}
          src={user.image}
        />
      ) : (
        <MaterialAvatar {...stringAvatar(user.name)} />
      )}
    </Tooltip>
  );
};

export { Avatar };
