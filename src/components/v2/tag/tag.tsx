import React, { FC } from 'react';
import Chip, { ChipOwnProps } from '@mui/material/Chip'
import { stringToColor } from '../../utils'
import { Typography } from '@mui/material';

interface TagProps {
    children: string
    size?: ChipOwnProps["size"]
    fontSize?: number
}

const Tag: FC<TagProps> = ({children, size, fontSize = 12}) => {
    const backgroundColor = stringToColor(children);

    return <Chip 
                size={size} 
                sx={{
                    background: backgroundColor, 
                    color: 'white', 
                    minWidth: '60px', 
                    borderRadius: '6px', 
                }} 
                label={<Typography fontSize={fontSize}>{children}</Typography>}
            />
}

export {Tag}