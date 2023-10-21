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
import { useSocket } from '../socket-service/socket-hook';
import { useNavigate } from 'react-router-dom';

const Question: FC = memo(() => {
  const { state } = usePageContext();
  const navigate = useNavigate();
  useSocket(state.sessionId);

  const { quiz, currentQuestionId } = state;
  const question = quiz?.questions.find(question => question.id === currentQuestionId);
  const currentIndex =
    quiz?.questions.findIndex(question => question.id === currentQuestionId) || 0;
  const variants = question?.variants;

  const [reveal, setReveal] = useState(false);
  const [isVariantsEnabled, setVariantsEnabled] = useState(true);
  const [selectedVariantId, setSelectedVariantId] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(question?.time || 0);

  useEffect(() => {
    if (currentQuestionId) {
      setTimeLeft(question?.time || 0);
      setReveal(false);
      setVariantsEnabled(true);
    }

    if (currentQuestionId === null) {
      setTimeout(() => {
        navigate('/rating');
      }, 1500);
    }
  }, [currentQuestionId]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(timeLeft => {
        if (timeLeft - 1 === 0) {
          clearInterval(interval);
          setTimeout(() => {
            if (state.sessionId && state.user.isAdmin) {
              productionApi.switchQuestion(state.sessionId);
            }
          }, 1500);
        }
        return timeLeft - 1;
      });
    }, 1000);
  }, [currentQuestionId]);

  useEffect(() => {
    if (timeLeft === 0) {
      setReveal(true);
    }
  }, [timeLeft]);

  const selectVariant = (id: number) => {
    setSelectedVariantId(id);
    setVariantsEnabled(false);
    if (state.sessionId && question) {
      productionApi.answerQuestion(state.sessionId, question.id, id, state.user.id, timeLeft);
    }
  };

  return (
    <Layout>
      <Paper className='question-wrapper'>
        <div className='question-header'>
          <p>
            Вопрос {currentIndex + 1} из {quiz?.questions.length || 10}
          </p>
          <Countdown initialTime={question?.time || 0} key={currentQuestionId} />
        </div>

        <p className='question-title'>{question?.title}</p>
        {question?.image ? (
          <img src={question.image} key={currentQuestionId} className='question-image' />
        ) : null}
      </Paper>

      <Grid container spacing={2} className='question-variants-wrapper'>
        {variants?.map((variant, i) => (
          <Grid item xs={12} sm={6} key={variant.id}>
            <VariantCard
              id={variant.id}
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
