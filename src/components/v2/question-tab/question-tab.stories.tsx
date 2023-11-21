import { Meta, StoryObj } from '@storybook/react';
import { QuestionTab } from './question-tab';

const meta = {
  component: QuestionTab,
  title: 'Components/QuestionTab',
  args: {},
} satisfies Meta<typeof QuestionTab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    question:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. In optio aperiam molestias consectetur? Est quas architecto necessitatibus. Voluptatum est consequatur quas ad recusandae similique illum, dicta nostrum ipsum in. Laboriosam?',
    questionNumber: 1,
    questionsCount: 5,
    time: 30,
    rate: 300,
    position: 1,
  },
};
