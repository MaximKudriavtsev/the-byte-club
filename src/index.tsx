import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { muiTheme } from './theme/theme';

import { store } from './store/store';
import { Auth } from './pages/auth';
import { PageContextProvider, usePageContext } from './context/page-context';
import { QuizList } from './pages/quiz-list';
import { RatingTable } from './pages/rating-table';
import { CreateQuiz } from './pages/create-quiz';
import { GenerateQuiz } from './pages/generate-quiz';

import './index.scss';
import { Room } from './pages/room';
import { Question } from './pages/question';

const queryClient = new QueryClient();

const App = () => {
  const state = usePageContext();

  console.log(state);

  return (
    <div className='App'>
      <PageContextProvider>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/quiz-list' element={<QuizList />} />
          <Route path='/question' element={<Question />} />
          <Route path='/room' element={<Room />} />
          <Route path='/rating' element={<RatingTable />} />
          <Route path='/create-quiz' element={<CreateQuiz />} />
          <Route path='/generate-quiz' element={<GenerateQuiz />} />
          <Route path='*' element={<div>hot found</div>} />
        </Routes>
      </PageContextProvider>
    </div>
  );
};

createRoot(document.getElementById('app')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={muiTheme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  </BrowserRouter>,
);
