import React, { FC } from 'react';

import './loader.scss';

interface LoaderProps {}

const Loader: FC<LoaderProps> = ({}) => {
  return (
    <div className='loader-wrapper'>
      <span className='loader'></span>
    </div>
  );
};

export { Loader };
