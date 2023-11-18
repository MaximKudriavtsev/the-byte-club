import React, { FC } from 'react';
import { LoadingButton as MaterialButton } from '@mui/lab';
import { Typography } from '@mui/material';
import { SxProps } from '@mui/system';

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
}) => {
  return (
    <MaterialButton
      sx={sx}
      loading={loading}
      fullWidth={fullWidth}
      endIcon={endIcon}
      onClick={onClick}
      size={size}
      disabled={disabled}
      disableRipple={type === ButtonType.Link ? true : false}
      color={setColor(type)}
      disableElevation
      variant={type == ButtonType.Link ? 'text' : 'contained'}
    >
      <Typography>{children}</Typography>
    </MaterialButton>
  );
};

export { Button };
