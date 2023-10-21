import React, { FC, useState, useEffect, memo } from 'react';
import { Question } from '../api/types';
import { Paper } from '@mui/material';
import { Grid } from '@mui/material';
import { Layout } from '../components/layout';
import { VariantCard } from '../components/variant-card/variant-card';

import './question.scss';
import { Countdown } from '../components/countdown/countdown';
import productionApi from '../api/production';
import { usePageContext } from '../store/context/page-context';

const Question: FC = memo(() => {
  const { state } = usePageContext();

  const { quiz, currentQuestionId } = state;
  const question = quiz?.questions.find(question => question.id === currentQuestionId);
  const variants = question?.variants;

  const [reveal, setReveal] = useState(false);
  const [isVariantsEnabled, setVariantsEnabled] = useState(true);
  const [selectedVariantId, setSelectedVariantId] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(question?.time || 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(timeLeft => {
        if (timeLeft - 1 === 0) {
          clearInterval(interval);
          if (state.sessionId) {
            productionApi.switchQuestion(state.sessionId);
          }
        }
        return timeLeft - 1;
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      setReveal(true);
    }
  }, [timeLeft]);

  const selectVariant = (id: number) => {
    setSelectedVariantId(id);
    setVariantsEnabled(false);
  };

  return (
    <Layout>
      <Paper className='question-wrapper'>
        <div className='question-header'>
          <p>Вопрос 1/5</p>
          <Countdown initialTime={question?.time || 0} />
        </div>

        <p className='question-title'>{question?.title}</p>
        {question?.image ? <img src={question.image} className='question-image' /> : null}
      </Paper>

      <Grid container spacing={2} className='question-variants-wrapper'>
        {variants?.map((variant, i) => (
          <Grid item xs={12} sm={6} key={variant.id}>
            <VariantCard
              variant={variant}
              number={i}
              reveal={reveal}
              isRight={variant.isRight}
              isSelected={variant.id === selectedVariantId}
              enabled={isVariantsEnabled}
              onClick={() => {
                selectVariant(variant.id);
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
});

export { Question };
