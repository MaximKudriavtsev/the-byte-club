import { Meta, StoryObj } from '@storybook/react';
import { Tag } from './tag';

const meta = {
  component: Tag,
  title: 'Components/Tag',
  args: {},
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    children: 'EDUCATION',
    size: 'medium',
    fontSize: 12,
  },
};
