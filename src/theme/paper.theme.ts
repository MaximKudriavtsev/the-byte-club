import { Components } from '@mui/material';
import { themeColors } from './config.theme';

export const muiPaperTheme: Components['MuiPaper'] = {
  styleOverrides: {
    root: () => ({
      backgroundColor: themeColors.transparentWhite,
      border: `1px solid ${themeColors.border}`,
      padding: 12,
      transition: 'all .2s',
      boxShadow: '0 4px 30px 0 rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(5px)',
    }),
  },
};
