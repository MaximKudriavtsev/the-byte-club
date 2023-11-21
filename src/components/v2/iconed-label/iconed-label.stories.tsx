import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { IconedLabel } from './iconed-label';
import StarsIcon from '@mui/icons-material/Stars';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { themeColors } from '../../../theme/config.theme';

const meta = {
  component: IconedLabel,
  title: 'Components/IconedLabel',
  args: {},
} satisfies Meta<typeof IconedLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Star: Story = {
  args: {
    icon: <StarsIcon sx={{ color: themeColors.gold }} />,
    text: '300',
  },
};

export const Position: Story = {
  args: {
    icon: <EmojiEventsIcon sx={{ color: themeColors.gold }} />,
    text: '1',
  },
};

export const Question: Story = {
  args: {
    icon: <HelpOutlineIcon sx={{ color: themeColors.blue }} />,
    text: '1/5',
  },
};
