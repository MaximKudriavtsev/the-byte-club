import React, { FC, ReactNode, useContext, useReducer } from 'react';
import Cookie from 'js-cookie';
import { Quiz } from '../../api/types';

type ContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const initialState: State = {
  user: Cookie.get('name') || null,
  quiz: null,
  sessionId: null,
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
}

type Action = {
  type: ActionType;
  payload: any;
};

type State = {
  user: any;
  sessionId: number | null;
  quiz: Quiz | null;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.SET_USER: {
      Cookie.set('user', action.payload);
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
