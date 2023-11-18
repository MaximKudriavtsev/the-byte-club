import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import SearchIcon from '@mui/icons-material/Search';

const meta = {
  component: Input,
  title: 'Components/Input',
  args: {},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};

export const Label: Story = {
  args: {
    label: 'Поиск',
  },
};

export const Icon: Story = {
  args: {
    icon: <SearchIcon />,
  },
};
