import { Components } from '@mui/material';
import { themeColors } from './config.theme';

export const muiButtonTheme: Components['MuiButton'] = {
  variants: [
    {
      props: { color: 'primary' },
      style: {
        background: themeColors.mainGradient,
        color: 'white',
        border: 'none',
        ':hover': {
          background: themeColors.mainGradient,
          filter: 'brightness(103%)',
        },
        ':disabled': {
          background: themeColors.disabled,
        },
      },
    },
    {
      props: { color: 'secondary' },
      style: {
        background: themeColors.transparentWhite,
        color: 'black',
        border: `1px solid ${themeColors.border}`,
        ':hover': {
          background: themeColors.border,
        },
      },
    },
    {
      props: { color: 'info' },
      style: {
        background: 'transparent',
        ':hover': {
          textDecoration: 'underline',
          background: 'transparent',
        },
      },
    },
  ],
};
