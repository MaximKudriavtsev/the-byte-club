import React, { FC, ReactNode, useContext, useReducer } from 'react';
import Cookie from 'js-cookie';

type ContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const PageContext = React.createContext<ContextType>({
  state: { user: null },
  dispatch: ({ type, payload }) => {},
});

export const usePageContext = () => {
  const state = useContext(PageContext);
  return state;
};

export enum ActionType {
  SET_USER = 'SET_USER',
}

type Action = {
  type: ActionType;
  payload: any;
};

type State = {
  user: any;
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
    default: {
      return state;
    }
  }
};

type Props = {
  children: ReactNode;
};

export const PageContextProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { user: Cookie.get('name') || null });

  return <PageContext.Provider value={{ state, dispatch }}>{children}</PageContext.Provider>;
};
