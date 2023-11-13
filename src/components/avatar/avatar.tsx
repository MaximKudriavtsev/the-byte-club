import React, { FC } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { default as MaterialAvatar } from '@mui/material/Avatar';
import { User } from '../../api/types';
import { stringToColor } from './../utils';
import { Typography } from '@mui/material';

interface AvatarProps {
  user: User;
  className?: string;
  size?: number;
}

const Avatar: FC<AvatarProps> = ({ user, className, size = 40 }) => {
  function hasWhiteSpace(s: string) {
    return s.indexOf(' ') >= 0;
  }

  function stringAvatar(name: string) {
    const letters = hasWhiteSpace(name)
      ? `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
      : name.slice(0, 2).toLocaleUpperCase();
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: size,
        height: size,
      },
      children: <Typography sx={{ fontSize: size / 2.5 }}>{letters}</Typography>,
    };
  }

  return (
    <Tooltip title={user.name}>
      {user.image ? (
        <MaterialAvatar
          sx={{ width: size, height: size }}
          alt={user.name}
          src={user.image}
          className={className}
        />
      ) : (
        <MaterialAvatar {...stringAvatar(user.name)} className={className} />
      )}
    </Tooltip>
  );
};

export { Avatar };
