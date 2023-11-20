import { Components } from '@mui/material';
import { boxShadow, themeColors } from './config.theme';

export const muiPaperTheme: Components['MuiPaper'] = {
  styleOverrides: {
    root: () => ({
      backgroundColor: themeColors.transparentWhite,
      border: `1px solid ${themeColors.border}`,
      padding: 12,
      transition: 'all .2s',
      boxShadow: boxShadow,
      backdropFilter: 'blur(5px)',
    }),
  },
};
