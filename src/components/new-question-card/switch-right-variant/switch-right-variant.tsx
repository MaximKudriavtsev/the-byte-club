import React, { FC, useState } from 'react';

import Switch from '@mui/material/Switch';

interface SwitchRightVariantProps {
  value: any;
  onChange: any;
}

const SwitchRightVariant: FC<SwitchRightVariantProps> = ({ value, onChange }) => {
  return (
    <Switch className='new-question-card-variant-switch' checked={value} onChange={onChange} />
  );
};

export { SwitchRightVariant };
