import React, { FC, useState } from 'react';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { SxProps } from '@mui/system';

interface InputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  size?: 'small' | 'medium';
  sx?: SxProps;
}

const Input: FC<InputProps> = ({
  value = '',
  placeholder,
  disabled = false,
  label,
  icon,
  fullWidth,
  size,
  sx,
}) => {
  const [text, setText] = useState(value);

  return (
    <TextField
      sx={sx}
      fullWidth={fullWidth}
      size={size}
      label={label}
      variant={label ? 'filled' : 'standard'}
      disabled={disabled}
      placeholder={placeholder}
      value={text}
      onChange={e => setText(e.target.value)}
      InputProps={{
        startAdornment: icon ? <InputAdornment position='start'>{icon}</InputAdornment> : null,
        disableUnderline: true,
      }}
    />
  );
};

export { Input };
