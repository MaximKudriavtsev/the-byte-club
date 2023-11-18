import React, { FC } from 'react';
import { ButtonBase, Paper as MaterialPaper } from '@mui/material';
import { SxProps } from '@mui/system';

interface PaperProps {
  children: React.ReactNode;
  sx?: SxProps;
  touchable?: boolean;
  onClick?: () => void;
}

const Paper: FC<PaperProps> = ({ children, sx, touchable = false, onClick }) => {
  return (
    <ButtonBase
      disabled={!touchable}
      sx={{
        ':hover': {
          borderRadius: '12px',
          backgroundColor: touchable ? 'rgb(255, 255, 255, 0.05)' : 'transparent',
        },
      }}
    >
      <MaterialPaper
        sx={sx}
        onClick={() => {
          if (!touchable || !onClick) return;
          onClick();
        }}
      >
        {children}
      </MaterialPaper>
    </ButtonBase>
  );
};

export { Paper };
