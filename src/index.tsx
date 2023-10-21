import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';

import { store } from './store/reducers/store';
import { Auth } from './pages/auth';
import { PageContextProvider, usePageContext } from './store/context/page-context';
import { QuizList } from './pages/quiz-list';
import { RatingTable } from './pages/rating-table';

import './index.scss';
import { Room } from './pages/room';
import { Question } from './pages/question';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#006ee6',
    },
    secondary: {
      main: '#0060d0',
    },
    warning: {
      main: '#ff3b30',
    },
  },
});

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
