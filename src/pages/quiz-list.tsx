import React from 'react';
import { QuizCard } from '../components/quiz-card/quiz-card';
import { Layout } from '../components/layout';
import { Quiz } from '../api/types';

export const QuizList = () => {
  const Quiz: Quiz = {
    id: 1,
    title:
      '0Квиз 1Квиз 1Квиз 1Квиз 1Квиз 1Квиз 1Квиз 1Квиз 1Квиз 1Квиз 1Квиз 1Квиз 1Квиз 1Квиз 1Квиз 1Квиз 1',
    questions: [],
  };
  return (
    <Layout>
      <QuizCard quiz={Quiz} />
      <QuizCard quiz={Quiz} />
      <QuizCard quiz={Quiz} />
    </Layout>
  );
};
