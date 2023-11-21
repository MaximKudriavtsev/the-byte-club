import React, { FC, useState } from 'react';
import { Paper } from '../paper/paper';
import { Input } from '../input/input';
import { Button, ButtonType } from '../button/button';
import { Grid } from '@mui/material';
import { VariantTemplate } from '../variant-template/variant-template';
import { QuestionType, Variant } from '../../../api/types';
import { TransitionGroup } from 'react-transition-group';
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { themeColors } from '../../../theme/config.theme';

interface QuestionTemplateProps {
  question: QuestionType;
  orderNumber?: number;
  disableDelete?: boolean;
  onDelete?: () => void;
}

const removeVariant = (variants: Variant[], id: number): Variant[] =>
  variants.filter(v => v.id !== id);

const addVariant = (variants: Variant[]): Variant[] => {
  const ids = variants.map(v => v.id);
  const highestId = Math.max(...ids);

  return variants.concat([
    {
      id: highestId + 1,
      questionId: variants[0].questionId,
      text: '',
      isRight: false,
    },
  ]);
};

const QuestionTemplate: FC<QuestionTemplateProps> = ({
  question,
  disableDelete = false,
  onDelete,
  orderNumber,
}) => {
  const [title, setTitle] = useState(question.title);
  const [variants, setVariants] = useState<Variant[]>(question.variants);

  return (
    <Paper touchable={false} sx={{ maxWidth: 500, pt: 2, pb: 2 }}>
      <Grid container spacing={1} alignItems={'center'}>
        <Grid item xs={10}>
          <Input
            label={`Вопрос ${orderNumber || question.id}`}
            onTextChange={text => setTitle(text)}
            value={title}
            fullWidth
            multiline
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            type={ButtonType.Link}
            rounded={true}
            disabled={disableDelete}
            onClick={() => {
              if (!onDelete) return;
              onDelete();
            }}
          >
            <ClearOutlinedIcon
              sx={{ color: disableDelete ? themeColors.disabled : themeColors.danger }}
            />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TransitionGroup>
            {variants.map((variant, i) => (
              <Collapse key={variant.id} in={true} sx={{ mt: 1 }}>
                <VariantTemplate
                  orderNumber={i + 1}
                  variant={variant}
                  disableDelete={variants.length < 3}
                  onDelete={() => setVariants(removeVariant(variants, variant.id))}
                />
              </Collapse>
            ))}
          </TransitionGroup>
        </Grid>
        <Grid item xs={12}>
          <Button
            rounded={true}
            type={ButtonType.Secondary}
            sx={{ alignSelf: 'center', mt: 2 }}
            onClick={() => setVariants(addVariant(variants))}
          >
            <AddIcon />
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export { QuestionTemplate };
