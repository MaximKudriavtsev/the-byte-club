import React, { FC, useState, useEffect, memo } from 'react';
import { Question, Variant } from '../api/types';
import { Paper } from '@mui/material';
import { Grid } from '@mui/material';
import { Layout } from '../components/layout';
import { VariantCard } from '../components/variant-card/variant-card';

import './question.scss';
import { Countdown } from '../components/countdown/countdown';
interface QuestionProps {}

const Question: FC<QuestionProps> = memo(() => {
  const variants: Variant[] = [
    {
      id: 1,
      questionId: 1,
      text: 'Мулан',
      isRight: false,
    },
    { id: 2, questionId: 1, text: 'Король Лев', isRight: false },
    {
      id: 3,
      questionId: 1,
      text: 'История игрушек История игрушек История игрушек История игрушек История игрушек История игрушек',
      isRight: false,
    },
    { id: 4, questionId: 1, text: 'Алладин', isRight: true },
  ];

  const question: Question = {
    id: 1,
    quizId: 1,
    variants,
    title:
      'В каком фильме Диснея был показан хит Элтона Джона 1994 года «Можете ли вы почувствовать любовь сегодня вечером»?',
    time: 15,
    value: 1,
    image: 'https://envybox.io/blog/wp-content/uploads/2022/10/IMG_1027.jpg',
  };

  const [reveal, setReveal] = useState(false);
  const [isVariantsEnabled, setVariantsEnabled] = useState(true);
  const [selectedVariantId, setSelectedVariantId] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(question.time);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(timeLeft => {
        if (timeLeft - 1 === 0) clearInterval(interval);
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
          <Countdown initialTime={question.time} />
        </div>

        <p className='question-title'>{question.title}</p>
        {question.image ? <img src={question.image} className='question-image' /> : null}
      </Paper>

      <Grid container spacing={2} className='question-variants-wrapper'>
        {variants.map((variant, i) => (
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
