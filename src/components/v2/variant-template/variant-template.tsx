import { Grid } from '@mui/material';
import { Checkbox } from '@mui/material';
import React, { FC, useState } from 'react';
import { Input } from '../input/input';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { themeColors } from '../../../theme/config.theme';
import { Button, ButtonType } from '../button/button';
import { Variant } from '../../../api/types';

interface VariantTemplateProps {
  variant: Variant;
  onDelete?: () => void;
  disableDelete?: boolean;
}

const VariantTemplate: FC<VariantTemplateProps> = ({
  variant,
  onDelete,
  disableDelete = false,
}) => {
  const [text, setText] = useState(variant.text);
  const [isRight, setRight] = useState(variant.isRight);

  return (
    <Grid container alignItems='center' spacing={1}>
      <Grid item xs={2}>
        <Checkbox color='success' checked={isRight} onChange={e => setRight(e.target.checked)} />
      </Grid>
      <Grid item xs={8}>
        <Input
          label={`Вариант ${variant.id}`}
          value={text}
          onTextChange={t => setText(t)}
          fullWidth
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
    </Grid>
  );
};

export { VariantTemplate };
