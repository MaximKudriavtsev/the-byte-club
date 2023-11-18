import { Components } from '@mui/material';
import { themeColors, themeSizes } from './config.theme';

export const muiInputTheme: Components['MuiTextField'] = {
  styleOverrides: {
    root: () => {
      return {
        '.MuiInputBase-root': {
          backgroundColor: themeColors.transparentWhite,
          border: `1px solid ${themeColors.border}`,
          borderRadius: themeSizes.borderRadius,
          paddingLeft: 12,
          transition: 'all .2s',
          minHeight: 55,
          ':hover': {
            backgroundColor: themeColors.border,
          },
        },
        '.MuiInputBase-root.Mui-disabled': {
          backgroundColor: themeColors.disabled,
        },
        '.MuiInputBase-root.Mui-focused': {
          backgroundColor: `${themeColors.transparentWhite} !important`,
          border: `1px solid ${themeColors.blue}`,
        },
        '.Mui-focused.MuiInputLabel-root': {
          color: themeColors.blue,
        },
      };
    },
  },
  variants: [
    {
      props: { variant: 'standard', disabled: true },
      style: {
        borderRadius: themeSizes.borderRadius,
        transition: 'all .2s',
      },
    },
    {
      props: { variant: 'filled' },
      style: {
        paddingLeft: 0,
        input: {
          paddingLeft: 0,
        },
      },
    },
  ],
};
