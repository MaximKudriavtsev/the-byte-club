import React from 'react';
import { useQuery } from 'react-query';
import { QuizCard } from '../components/quiz-card/quiz-card';
import { Layout } from '../components/layout';
import { productionApi } from '../api/production';
import { usePageContext } from '../store/context/page-context';
import { Navigate } from 'react-router-dom';

export const QuizList = () => {
  const { state } = usePageContext();
  const { data, isLoading } = useQuery('list', () => productionApi.getList({ skip: 0, take: 10 }));

  return (
    <Layout>
      {state.user === null && <Navigate to='/auth' />}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.items.map(quiz => <QuizCard key={quiz.id} quiz={quiz} user={state.user} />)
      )}
    </Layout>
  );
};
