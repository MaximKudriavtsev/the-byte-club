import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Countdown } from './countdown';
import { mockUsers } from '../../../api/mockData';
import { Paper } from '../paper/paper';

const meta = {
  component: Countdown,
  decorators: [
    Story => (
      <Paper>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </Paper>
    ),
  ],
  title: 'Components/Countdown',
  args: {},
} satisfies Meta<typeof Countdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    time: 30,
    user: mockUsers[0],
  },
};
