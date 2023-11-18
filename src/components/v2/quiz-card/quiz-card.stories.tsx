import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { QuizCard } from './quiz-card';

import ThemeProvider from '@mui/material/styles/ThemeProvider';

const meta = {
  component: QuizCard,
  title: 'Components/QuizCard',
  args: {},
} satisfies Meta<typeof QuizCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    title: 'Веселый квиз',
    users: [
      {
        id: 12313213,
        name: 'Иван Рыбаков',
        isAdmin: false,
      },
      {
        id: 12313213,
        name: 'Вася Рыбаков',
        isAdmin: false,
      },
      {
        id: 12313213,
        name: 'Коля Рыбаков',
        isAdmin: false,
      },
      {
        id: 12313213,
        name: 'Женя Рыбаков',
        isAdmin: false,
      },
      {
        id: 12313213,
        name: 'Миша Рыбаков',
        isAdmin: false,
      },
    ],
    tags: ['AI', 'EDUCATION', 'FUN'],
  },
};
