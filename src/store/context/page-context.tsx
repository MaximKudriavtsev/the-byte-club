import React, { FC, ReactNode, useContext, useReducer } from 'react';
import { Quiz, RatingTableRow } from '../../api/types';
import { getLocalItem, setLocalItem } from './local-storage';

type ContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const initialState: State = {
  user: getLocalItem('user'),
  quiz: null,
  sessionId: null,
  currentQuestionId: null,
  table: [],
};

export const PageContext = React.createContext<ContextType>({
  state: initialState,
  dispatch: ({ type, payload }) => {},
});

export const usePageContext = () => {
  const state = useContext(PageContext);
  return state;
};

export enum ActionType {
  SET_USER = 'SET_USER',
  SET_SESSION_ID = 'SET_SESSION_ID',
  SET_QUIZ = 'SET_QUIZ',
  SET_TABLE = 'SET_TABLE',
  SET_CURRENT_QUESTION_ID = 'SET_CURRENT_QUESTION_ID',
}

type Action = {
  type: ActionType;
  payload: any;
};

type State = {
  user: any;
  sessionId: number | null;
  quiz: Quiz | null;
  table: RatingTableRow[];
  currentQuestionId: number | null;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_USER: {
      setLocalItem('user', action.payload);
      return {
        ...state,
        user: action.payload,
      };
    }
    case ActionType.SET_SESSION_ID: {
      return {
        ...state,
        sessionId: action.payload,
      };
    }
    case ActionType.SET_QUIZ: {
      return {
        ...state,
        quiz: action.payload,
      };
    }
    case ActionType.SET_TABLE: {
      return {
        ...state,
        table: action.payload,
      };
    }
    case ActionType.SET_CURRENT_QUESTION_ID: {
      return {
        ...state,
        currentQuestionId: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

type Props = {
  children: ReactNode;
};

export const PageContextProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <PageContext.Provider value={{ state, dispatch }}>{children}</PageContext.Provider>;
};
