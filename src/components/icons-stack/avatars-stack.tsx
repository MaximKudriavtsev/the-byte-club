import React, { FC } from 'react';
import Stack from '@mui/material/Stack';
import { Avatar } from '../avatar/avatar';
import { User } from '../../api/types';
import './avatars-stack.scss';

interface AvatarsStackProps {
  users: User[];
  className?: string;
}

const AvatarsStack: FC<AvatarsStackProps> = ({ users, className }) => {
  return (
    <Stack
      direction='row'
      spacing={2}
      useFlexGap
      flexWrap='wrap'
      className={`avatars-stack-wrapper ${className}`}
    >
      {users.map((user, i) => (
        <Avatar user={user} key={i} />
      ))}
      {users.map((user, i) => (
        <Avatar user={user} key={i} />
      ))}
      {users.map((user, i) => (
        <Avatar user={user} key={i} />
      ))}
      {users.map((user, i) => (
        <Avatar user={user} key={i} />
      ))}
      {users.map((user, i) => (
        <Avatar user={user} key={i} />
      ))}
      {users.map((user, i) => (
        <Avatar user={user} key={i} />
      ))}
    </Stack>
  );
};

export { AvatarsStack };
