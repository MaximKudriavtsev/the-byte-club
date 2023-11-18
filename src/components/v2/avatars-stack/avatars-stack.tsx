import React, { FC } from 'react';
import Stack from '@mui/material/Stack';
import { Avatar } from '../avatar/avatar';
import { User } from '../../../api/types';
import { default as MaterialAvatar } from '@mui/material/Avatar';
import { formatToK } from '../../utils';
import { themeColors } from '../../../theme/config.theme';
import { SxProps } from '@mui/system';

interface AvatarsStackProps {
  length?: number;
  avatarsSize?: number;
  users: User[];
  sx?: SxProps;
}

const AvatarsStack: FC<AvatarsStackProps> = ({ length = 3, avatarsSize = 40, users, sx }) => {
  return (
    <Stack direction='row' spacing={-1.5} sx={sx}>
      {users.slice(0, length).map((user, i) => (
        <Avatar size={avatarsSize} user={user} key={i} />
      ))}
      {users.length > length ? (
        <MaterialAvatar
          sx={{
            fontSize: avatarsSize / 3,
            background: themeColors.mainGradient,
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
