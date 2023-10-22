import React, { memo } from 'react';
import { useQuery } from 'react-query';
import { QuizCard } from '../components/quiz-card/quiz-card';
import { Layout } from '../components/layout';
import { productionApi } from '../api/production';
import { usePageContext } from '../store/context/page-context';
import { Navigate } from 'react-router-dom';
import { Loader } from '../components/loader/loader';
import { Typography } from '@mui/material';
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

import './quiz-list.scss';

const getList = () => productionApi.getList({ skip: 0, take: 10 });

export const QuizList = memo(() => {
  const { state } = usePageContext();
  const { data, isLoading } = useQuery('list', getList);
  const navigate = useNavigate();

  const goGenerateQuizPage = () => {
    navigate('/generate-quiz');
  }

  return (
    <Layout header={<Typography variant='h2'>Выбери квиз</Typography>}>
      <div className='generate-new-quiz'>
        <Typography variant='h6'>
          Или сгенерируй его на основе нейронных сетей!
        </Typography>
        <Button variant='contained' onClick={() => goGenerateQuizPage()} size='large'>
          Сгенерировать
        </Button>
      </div>
      {state.user === null && <Navigate to='/auth' />}
      {isLoading ? (
        <Loader />
      ) : (
        data?.items.map(quiz => <QuizCard key={quiz.id} quiz={quiz} user={state.user} />)
      )}
    </Layout>
  );
});
