import React, { FC } from 'react';

import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

import { AvatarsStack } from '../avatars-stack/avatars-stack';
import { Paper } from './../paper/paper';
import { Tag } from './../tag/tag';

import { User } from './../../../api/types';

interface QuizCardProps {
  title: string;
  users?: User[];
  tags?: string[];
}

const QuizCard: FC<QuizCardProps> = ({ title, users, tags }) => {
  return (
    <Paper
      sx={{
        width: 220,
        padding: 2,
      }}
      touchable={true}
    >
      <Typography variant='h3' align='left'>
        {title}
      </Typography>
      <Stack
        direction='row'
        spacing={1}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'flex-start',
          margin: '10px 0',
          width: '100%',
          height: 90,
          overflow: 'hidden',
        }}
        useFlexGap
        flexWrap='wrap'
      >
        {tags
          ? tags.map((tag, i) => (
              <Tag size='small' fontSize={9} key={i}>
                {tag}
              </Tag>
            ))
          : null}
      </Stack>
      {users ? <AvatarsStack users={users} /> : null}
    </Paper>
  );
};

export { QuizCard };
