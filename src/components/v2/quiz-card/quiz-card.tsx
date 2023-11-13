import React, { FC } from 'react';

import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

import { AvatarsStack } from '../avatars-stack/avatars-stack';
import { Glass } from '../glass/glass';
import { Tag } from './../tag/tag';

import { User } from './../../../api/types';

import variables from './../../../variables.module.scss';
import './quiz-card.scss';

interface QuizCardProps {
  title: string;
  users?: User[];
  tags?: string[];
}

const QuizCard: FC<QuizCardProps> = ({ title, users, tags }) => {
  return (
    <Button
      sx={{
        background: 'transparent',
        color: 'black',
        padding: 0,
        borderRadius: variables.glassBorderRadius,
      }}
    >
      <Glass className='quiz-card-v2-wrapper'>
        <Typography variant='h3'>{title}</Typography>
        <Stack direction='row' spacing={1} className='quiz-card-v2-tags' useFlexGap flexWrap='wrap'>
          {tags
            ? tags.map((tag, i) => (
                <Tag size='small' fontSize={9} key={i}>
                  {tag}
                </Tag>
              ))
            : null}
        </Stack>
        {users ? <AvatarsStack className='quiz-card-v2-avatars' users={users} /> : null}
      </Glass>
    </Button>
  );
};

export { QuizCard };
