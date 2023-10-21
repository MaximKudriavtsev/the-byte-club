import React, {FC, useState} from 'react';

import Switch from "@mui/material/Switch";

interface SwitchRightVariantProps {
  value: any;
  onChange: any;
}

const SwitchRightVariant: FC<SwitchRightVariantProps> = ({value, onChange}) => {
  const [rightVariant, setRightVariant] = useState(false);

  const changeRightVariant = () => {
    setRightVariant(!rightVariant);
  };

  return (
    <Switch
      className='new-question-card-variant-switch'
      checked={rightVariant}
      onChange={changeRightVariant}
    />
  );
};

export { SwitchRightVariant };
