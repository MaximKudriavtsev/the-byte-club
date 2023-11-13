import { Meta, StoryObj } from '@storybook/react';
import { AvatarsStack } from './avatars-stack';

const meta = {
  component: AvatarsStack,
  title: 'Components/AvatarsStack-v2',
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
    avatarsSize: 40,
    length: 3,
  },
};
