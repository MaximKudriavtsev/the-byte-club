import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';
import { Quiz, RatingTableRow, User } from '../../api/types';

type UserState = {
  user: User | null;
  sessionId: number | null;
  quiz: Quiz | null;
  table: RatingTableRow[];
  currentQuestionId: number | null;
};

const initialState: UserState = {
  user: null,
  quiz: null,
  sessionId: null,
  currentQuestionId: null,
  table: [],
};

export const userSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setQuiz: (state, action: PayloadAction<Quiz | null>) => {
      state.quiz = action.payload;
    },
    setSessionId: (state, action: PayloadAction<number | null>) => {
      state.sessionId = action.payload;
    },
    setTable: (state, action: PayloadAction<RatingTableRow[]>) => {
      state.table = action.payload;
    },
    setCurrentQuestionId: (state, action: PayloadAction<number | null>) => {
      state.currentQuestionId = action.payload;
    },
  },
});

export const { setUser, setQuiz, setSessionId, setTable, setCurrentQuestionId } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;
export const userReducer = userSlice.reducer;
