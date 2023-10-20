import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';

import { store } from './store/reducers/store';
import { Auth } from './pages/auth';

import './index.scss';
import { QuizList } from './pages/quiz-list';

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
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/quiz-list' element={<QuizList />} />
        <Route path='*' element={<div>hot found</div>} />
      </Routes>
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
