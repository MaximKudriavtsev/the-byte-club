import { Grid, Stack, Typography, Container } from '@mui/material';
import { Paper } from '../paper/paper';
import React, { FC } from 'react';
import { Countdown } from '../countdown/countdown';
import { IconedLabel } from '../iconed-label/iconed-label';
import { mockUsers } from '../../../api/mockData';
import { themeColors } from '../../../theme/config.theme';
import StarsIcon from '@mui/icons-material/Stars';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

interface QuestionTabProps {
  question: string;
  questionNumber: number;
  questionsCount: number;
  time: number;
  rate: number;
  position: number;
}

const QuestionTab: FC<QuestionTabProps> = ({
  question,
  questionNumber,
  questionsCount,
  time,
  rate,
  position,
}) => {
  return (
    <Paper
      sx={{
        mt: 2,
        maxWidth: 500,
      }}
    >
      <Grid container sx={{ height: '100%' }} spacing={2}>
        <Grid item xs={5} sm={4} md={3} sx={{ height: '100%' }}>
          <Stack
            direction='column'
            spacing={1}
            width='auto'
            height={'100%'}
            flexWrap='wrap'
            alignItems={'center'}
          >
            <Countdown time={time} user={mockUsers[1]} size={72} />
            <IconedLabel
              icon={<HelpOutlineIcon sx={{ color: themeColors.blue }} />}
              text={`${questionNumber}/${questionsCount}`}
            />
            <IconedLabel icon={<StarsIcon sx={{ color: themeColors.gold }} />} text={`${rate}`} />
            <IconedLabel
              icon={<EmojiEventsIcon sx={{ color: themeColors.gold }} />}
              text={`${position}`}
            />
          </Stack>
        </Grid>
        <Grid item xs={7} sm={8} md={9}>
          <Typography
            sx={{
              display: 'flex',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {question}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export { QuestionTab };
