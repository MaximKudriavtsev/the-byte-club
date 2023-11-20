import { Meta, StoryObj } from '@storybook/react';
import { VariantTemplate } from './variant-template';
import { mockVariants } from '../../../api/mockData';

const meta = {
  component: VariantTemplate,
  title: 'Components/VariantTemplate',
  args: {},
} satisfies Meta<typeof VariantTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    variant: mockVariants[0],
  },
};
