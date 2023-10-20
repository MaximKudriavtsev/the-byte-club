import React from 'react';
import { useQuery } from 'react-query';
import { QuizCard } from '../components/quiz-card/quiz-card';
import { Layout } from '../components/layout';
import { productionApi } from '../api/production';

export const QuizList = () => {
  const { data, isLoading } = useQuery('list', () => productionApi.getList({ skip: 0, take: 10 }));

  return (
    <Layout>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.items.map(quiz => <QuizCard key={quiz.id} quiz={quiz} />)
      )}
    </Layout>
  );
};
