import React from 'react';
import { useQuery } from 'react-query';
import productionApi from '../api/production';

export const Auth = () => {
  const { data, isLoading } = useQuery('list', () => productionApi.getList({ skip: 0, take: 10 }));

  return <div>Hello AUTH</div>;
};
