import React, { FC } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { default as MaterialAvatar } from '@mui/material/Avatar';
import { User } from '../../api/types';

interface AvatarProps {
  user: User;
}

const Avatar: FC<AvatarProps> = ({ user }) => {
  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

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
      },
      children: letters,
    };
  }

  return (
    <Tooltip title={user.name}>
      {user.image ? (
        <MaterialAvatar alt={user.name} src={user.image} />
      ) : (
        <MaterialAvatar {...stringAvatar(user.name)} />
      )}
    </Tooltip>
  );
};

export { Avatar };
