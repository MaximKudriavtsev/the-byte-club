import { Meta, StoryObj } from '@storybook/react';
import { QuestionTemplate } from './question-template';
import { mockQuestions } from '../../../api/mockData';

const meta = {
  component: QuestionTemplate,
  title: 'Components/QuestionTemplate',
  args: {},
} satisfies Meta<typeof QuestionTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: { question: mockQuestions[0] },
};
