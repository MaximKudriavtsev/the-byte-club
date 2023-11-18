import React from 'react';
import createTheme from '@mui/material/styles/createTheme';
import { ThemeProvider } from '@mui/material/styles';

import { themeColors } from './config.theme';
import { themeSizes } from './config.theme';
import { muiButtonTheme } from './button.theme';
import { muiInputTheme } from './input.theme';
import { muiPaperTheme } from './paper.theme';

export const muiTheme = createTheme({
  typography: {
    fontFamily: ['-apple-system', '"Helvetica Neue"', '"Segoe UI"', 'Roboto', 'Aarial'].join(','),
    h3: {
      fontSize: 26,
      fontWeight: 300,
    },
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#04b3eb',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fff',
      contrastText: '#04b3eb',
    },
    success: {
      main: '#000000',
    },
    warning: {
      main: '#ff3b30',
    },
    action: {
      disabled: themeColors.placeholder,
      disabledBackground: themeColors.disabled,
    },
  },
  shape: {
    borderRadius: themeSizes.borderRadiusNum,
  },
  components: {
    MuiButton: muiButtonTheme,
    MuiTextField: muiInputTheme,
    MuiPaper: muiPaperTheme,
    MuiTouchRipple: {
      styleOverrides: {
        root: () => ({
          borderRadius: themeSizes.borderRadius,
          color: 'white',
        }),
      },
    },
  },
});

export const decorators = [
  (Story: any) => (
    <ThemeProvider theme={muiTheme}>
      <Story />
    </ThemeProvider>
  ),
];
