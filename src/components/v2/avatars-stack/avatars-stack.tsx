import React, { FC } from 'react';
import Stack from '@mui/material/Stack';
import { Avatar } from '../../avatar/avatar';
import { User } from '../../../api/types';
import { default as MaterialAvatar } from '@mui/material/Avatar';
import { formatToK } from '../../utils';
import './avatars-stack.scss';
import variables from './../../../variables.module.scss';

interface AvatarsStackProps {
  length?: number;
  avatarsSize?: number;
  users: User[];
  className?: string;
}

const AvatarsStack: FC<AvatarsStackProps> = ({
  length = 3,
  avatarsSize = 40,
  users,
  className,
}) => {
  return (
    <Stack direction='row' spacing={-1.5} className={`avatars-stack-2-wrapper ${className}`}>
      {users.slice(0, length).map((user, i) => (
        <Avatar size={avatarsSize} user={user} key={i} className='avatars-stack-2-avatar' />
      ))}
      {users.length > length ? (
        <MaterialAvatar
          sx={{
            fontSize: avatarsSize / 3,
            background: variables.mainGradient,
            width: avatarsSize,
            height: avatarsSize,
          }}
        >
          {`+${formatToK(users.length - length)}`}
        </MaterialAvatar>
      ) : null}
    </Stack>
  );
};

export { AvatarsStack };
