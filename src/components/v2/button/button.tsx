import React, { FC } from 'react';
import { LoadingButton as MaterialButton } from '@mui/lab';
import { Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import { boxShadow } from '../../../theme/config.theme';

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
  sx?: SxProps;
  rounded?: boolean;
  roundSize?: number;
  shadow?: boolean;
}

const setColor = (buttonType: ButtonType) => {
  if (buttonType === ButtonType.Warning) return 'error';
  if (buttonType === ButtonType.Link) return 'info';
  if (buttonType === ButtonType.Secondary) return 'secondary';
  return 'primary';
};

const Button: FC<ButtonProps> = ({
  sx,
  loading = false,
  fullWidth = false,
  children,
  endIcon,
  onClick,
  size = 'medium',
  disabled = false,
  type = ButtonType.Primary,
  rounded = false,
  roundSize = 32,
  shadow = false,
}) => {
  const roundedStyle: SxProps = {
    minWidth: roundSize,
    maxWidth: roundSize,
    width: roundSize,
    minHeight: roundSize,
    maxHeight: roundSize,
    height: roundSize,
    borderRadius: '50%',
    overflow: 'hidden',
    '.MuiTypography-root': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  return (
    <MaterialButton
      sx={{ ...(rounded ? roundedStyle : {}), ...sx, ...(shadow ? { boxShadow } : {}) }}
      loading={loading}
      fullWidth={fullWidth}
      endIcon={endIcon}
      onClick={onClick}
      size={rounded ? 'small' : size}
      disabled={disabled}
      disableRipple={type === ButtonType.Link && !rounded ? true : false}
      color={setColor(type)}
      disableElevation
      variant={type == ButtonType.Link ? 'text' : 'contained'}
    >
      <Typography>{children}</Typography>
    </MaterialButton>
  );
};

export { Button };
