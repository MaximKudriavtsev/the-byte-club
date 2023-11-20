import { Meta, StoryObj } from '@storybook/react';
import { QuizTemplate } from './quiz-template';
import { mockQuiz } from '../../../api/mockData';

const meta = {
  component: QuizTemplate,
  title: 'Components/QuizTemplate',
  args: {},
} satisfies Meta<typeof QuizTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: { quiz: mockQuiz },
};
