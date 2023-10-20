import React from 'react';
import { useQuery } from 'react-query';
import { QuizCard } from '../components/quiz-card/quiz-card';
import { Layout } from '../components/layout';
import { Quiz } from '../api/types';
import { productionApi } from '../api/production';

export const QuizList = () => {
  const Quiz: Quiz = {
    id: 1,
    title:
      '0Квиз 1Квиз 1Квиз 1Квиз 1Квиз 1Квиз 1Квиз 1Квиз 1Квиз 1Квиз 1Квиз 1Квиз 1Квиз 1Квиз 1Квиз 1Квиз 1',
    questions: [],
  };

  const { data, isLoading } = useQuery('list', () => productionApi.getList({ skip: 0, take: 10 }));

  console.log('items', data);

  return (
    <Layout>
      <QuizCard quiz={Quiz} />
      <QuizCard quiz={Quiz} />
      <QuizCard quiz={Quiz} />
    </Layout>
  );
};
