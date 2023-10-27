import { Meta, StoryObj } from '@storybook/react';
import { AvatarsStack } from './avatars-stack';

const meta = {
  component: AvatarsStack,
  title: 'Example/AvatarsStack',
  args: {},
} satisfies Meta<typeof AvatarsStack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OneUser: Story = {
  args: {
    users: [
      {
        id: 12313213,
        name: 'Иван Рыбаков',
        isAdmin: false,
      },
    ],
  },
};

export const TwoUsers: Story = {
  args: {
    users: [
      {
        id: 12313213,
        name: 'Иван Рыбаков',
        isAdmin: false,
      },
      {
        id: 12313212,
        name: 'Andy Murray',
        isAdmin: false,
      },
    ],
  },
};
