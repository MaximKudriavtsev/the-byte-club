import React, { useEffect, useState, useRef, memo } from 'react';
import { QuestionTemplate } from '../question-template/question-template';
import { mockQuiz } from '../../../api/mockData';
import { Button } from '../button/button';
import AddIcon from '@mui/icons-material/Add';
import { Grid } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';
import Container from '@mui/material/Container';
import Zoom from '@mui/material/Zoom';
import { QuestionType, Quiz } from '../../../api/types';
import { scrollToEnd } from '../../utils';

const removeQuestion = (question: QuestionType[], id: number): QuestionType[] =>
  question.filter(q => q.id !== id);
const addQuestion = (questions: QuestionType[]): QuestionType[] => {
  const ids = questions.map(v => v.id);
  const highestId = Math.max(...ids);

  return questions.concat([{ ...questions[questions.length - 1], id: highestId + 1 }]); //for a wile just copy last question
};

export const QuizTemplate = memo(() => {
  const [quiz, setQuiz] = useState<Quiz>(mockQuiz);
  const [questions, setQuestions] = useState<QuestionType[]>(mockQuiz.questions);
  const [questionsCount, setQuestionsCount] = useState(mockQuiz.questions.length);

  const endListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (questions.length > questionsCount) scrollToEnd(endListRef);
    setQuestionsCount(questions.length);
  }, [questions.length]);

  return (
    <Grid container spacing={1} alignItems={'center'}>
      <Grid item xs={12} alignItems={'center'}>
        <TransitionGroup>
          {questions.map((qestion, i) => (
            <Zoom key={qestion.id} in={true}>
              <Container sx={{ mt: 4, display: 'flex', justifyContent: 'center' }} key={qestion.id}>
                <QuestionTemplate
                  question={qestion}
                  orderNumber={i + 1}
                  onDelete={() => setQuestions(removeQuestion(questions, qestion.id))}
                  disableDelete={questions.length < 2}
                />
              </Container>
            </Zoom>
          ))}
        </TransitionGroup>
      </Grid>
      <Grid item xs={12}>
        <Container sx={{ display: 'flex' }}>
          <Button
            rounded={true}
            roundSize={56}
            sx={{ m: 'auto', mt: 5, mb: 5 }}
            shadow={true}
            onClick={() => setQuestions(addQuestion(questions))}
          >
            <AddIcon fontSize='large' />
          </Button>
        </Container>
        <div ref={endListRef} />
      </Grid>
    </Grid>
  );
});
