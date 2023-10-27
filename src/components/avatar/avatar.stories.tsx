import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './avatar';

const meta = {
  component: Avatar,
  title: 'Example/Avatar',
  args: {},
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    user: {
      id: 12313213,
      name: 'Иван Рыбаков',
      isAdmin: false,
    },
  },
};
