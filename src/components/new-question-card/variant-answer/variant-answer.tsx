import React, {FC, useState} from 'react';

import {TextField} from "@mui/material";

interface VariantAnswerProps {
  value: string;
  onChange: (value: any) => any;
}
const VariantAnswer: FC<VariantAnswerProps> = () => {
  const [questionVariant, setQuestionVariant] = useState('');

  return (
    <div className='new-question-card-variant'>
      <TextField
        fullWidth
        placeholder='Введите вариант ответа'
        variant='outlined'
        value={questionVariant}
        onChange={e => {
          setQuestionVariant(e.target.value);
        }}
      />
    </div>
  );
};

export { VariantAnswer };
