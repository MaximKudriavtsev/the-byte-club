import { Meta, StoryObj } from '@storybook/react';
import { Paper } from './paper';

const meta = {
  component: Paper,
  title: 'Components/Paper',
  args: {},
} satisfies Meta<typeof Paper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    children: 'Paper',
  },
};
