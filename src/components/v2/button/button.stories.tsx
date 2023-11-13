import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonType } from './button';

const meta = {
  component: Button,
  title: 'Components/Button',
  args: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    type: ButtonType.Primary,
    size: 'medium',
    disabled: false,
    loading: false,
  },
};

export const Secondary: Story = {
  args: {
    type: ButtonType.Secondary,
    children: 'Secondary',
    size: 'medium',
    disabled: false,
    loading: false,
  },
};

export const Link: Story = {
  args: {
    type: ButtonType.Link,
    children: 'Link',
    size: 'medium',
    disabled: false,
    loading: false,
  },
};

export const Warning: Story = {
  args: {
    type: ButtonType.Warning,
    children: 'Warning',
    size: 'medium',
    disabled: false,
    loading: false,
  },
};
