import type { Preview } from '@storybook/react';
import { decorators } from './../src/theme/theme';
import { themeColors } from '../src/theme/config.theme';
import { values } from 'lodash';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'app',
      values: [
        {
          name: 'app',
          value: themeColors.mainGradient,
        },
        {
          name: 'green',
          value: themeColors.green,
        },
        {
          name: 'blue',
          value: themeColors.blue,
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators,
};

export default preview;
