import React, { FC } from 'react';
import { LoadingButton as MaterialButton } from '@mui/lab';
import { Typography } from '@mui/material';

import variables from './../../../variables.module.scss';

export enum ButtonType {
  Primary,
  Secondary,
  Link,
  Warning,
}

interface ButtonProps {
  fullWidth?: boolean;
  children?: React.ReactNode;
  loading?: boolean;
  endIcon?: React.ReactNode;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: ButtonType;
}

interface ButtonStyle {
  background: string;
  color: string;
  border: string;
  '&:hover': {
    boxShadow: string;
    background: string;
    textDecoration?: string;
  };
}

const PrimaryStyle: ButtonStyle = {
  background: variables.mainGradient,
  color: 'white',
  border: 'none',
  '&:hover': {
    background: variables.mainGradient,
    boxShadow: '0 2px 4px 4px rgba(0, 0, 0, .15)',
  },
};

const SecondaryStyle: ButtonStyle = {
  background: 'rgba(255,255,255,0.3)',
  color: 'black',
  border: `1px solid ${variables.borderColor}`,
  '&:hover': {
    background: 'rgba(255,255,255,0.5)',
    boxShadow: 'none',
  },
};

const LinkStyle: ButtonStyle = {
  background: 'transparent',
  color: variables.blueColor,
  border: 'none',
  '&:hover': {
    textDecoration: 'underline',
    background: 'transparent',
    boxShadow: 'none',
  },
};

const WarningStyle: ButtonStyle = {
  background: variables.dangerColor,
  color: 'white',
  border: 'none',
  '&:hover': {
    boxShadow: '0 2px 4px 4px rgba(0, 0, 0, .15)',
    background: variables.dangerColor,
  },
};

const setStyle = (type: ButtonType): ButtonStyle => {
  if (type === ButtonType.Warning) return WarningStyle;
  if (type === ButtonType.Link) return LinkStyle;
  if (type === ButtonType.Secondary) return SecondaryStyle;
  return PrimaryStyle;
};

const Button: FC<ButtonProps> = ({
  loading = false,
  fullWidth = false,
  children,
  endIcon,
  onClick,
  size = 'medium',
  disabled = false,
  type = ButtonType.Primary,
}) => {
  return (
    <MaterialButton
      loading={loading}
      fullWidth={fullWidth}
      endIcon={endIcon}
      onClick={onClick}
      size={size}
      disabled={disabled}
      disableRipple={type === ButtonType.Link ? true : false}
      sx={{
        borderRadius: '10px',
        transition: 'all .2s',
        '&:disabled': {
          filter: 'brightness(110%)',
        },
        ...setStyle(type),
      }}
    >
      <Typography>{children}</Typography>
    </MaterialButton>
  );
};

export { Button };
