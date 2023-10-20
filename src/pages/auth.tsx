import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import productionApi from '../api/production';
import { ActionType, usePageContext } from '../store/context/page-context';

export const Auth = () => {
  const [localUser, setLocalUser] = useState('');
  const { dispatch } = usePageContext();
  const { data: user } = useQuery('auth', () => productionApi.authUser(localUser));

  useEffect(() => {
    if (user) {
      dispatch({ type: ActionType.SET_USER, payload: user });
    }
  }, [user]);

  return <div>AUTH</div>;
};
