import React, { FC, useEffect, useState } from 'react';
import { Variant } from '../../api/types';
import './variant-card.scss';
import { Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

interface VariantCardProps {
  id: number;
  variant: Variant;
  reveal: boolean;
  isRight?: boolean;
  isSelected?: boolean;
  enabled?: boolean;
  number: number;
  onClick: () => void;
}

const VariantCard: FC<VariantCardProps> = ({
  id,
  variant,
  number,
  reveal,
  isSelected = false,
  isRight = false,
  enabled = true,
  onClick,
}) => {
  const [cardStyle, setCardStyle] = useState('variant-card');
  const [icon, setIcon] = useState<React.ReactNode | null>(null);

  enum VariantType {
    Selected,
    Correct,
    Wrong,
    Normal,
  }

  const styleVariant = (type: VariantType) => {
    switch (type) {
      case VariantType.Selected:
        setIcon(null);
        setCardStyle('variant-card_selected');
        break;
      case VariantType.Correct:
        setIcon(<CheckCircleIcon className='variant-card-button-icon' />);
        setCardStyle('variant-card_correct');
        break;
      case VariantType.Wrong:
        setIcon(<CancelIcon className='variant-card-button-icon' />);
        setCardStyle('variant-card_wrong');
        break;
      default:
        setIcon(null);
        setCardStyle('variant-card');
    }
  };

  useEffect(() => {
    if (isSelected) styleVariant(VariantType.Selected);
    if (isSelected && reveal) {
      if (isRight) {
        styleVariant(VariantType.Correct);
      } else {
        styleVariant(VariantType.Wrong);
      }
    } else {
      if (isRight && reveal) {
        styleVariant(VariantType.Correct);
      }
    }
  }, [isRight, isSelected, reveal]);

  useEffect(() => {
    styleVariant(VariantType.Normal);
  }, [id]);

  return (
    <Paper className={`variant-card-button-wrapper ${cardStyle}`}>
      <button disabled={!enabled} className='variant-card-button' onClick={() => onClick()}>
        <p className='variant-card-text'>{`${number + 1}. ${variant.text}`}</p>
        {icon}
      </button>
    </Paper>
  );
};

export { VariantCard };
