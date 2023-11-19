import { Meta, StoryObj } from '@storybook/react';
import { VariantTemplate } from './variant-template';

const meta = {
  component: VariantTemplate,
  title: 'Components/VariantTemplate',
  args: {},
} satisfies Meta<typeof VariantTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    variant: {
      id: 1,
      text: 'Правильный ответ',
      isRight: true,
      questionId: 1,
    },
  },
};
