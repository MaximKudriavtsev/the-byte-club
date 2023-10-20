import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Layout } from '../components/layout';
import { Paper } from '@mui/material';
import { Quiz, User } from '../api/types';
import { AvatarsStack } from '../components/icons-stack/avatars-stack';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import './room.scss';

export const Room = () => {
  const quiz: Quiz = {
    title: 'Quiz ebiz 1',
    id: 1,
    questions: [],
  };
  const users: User[] = [
    {
      id: 1,
      name: 'DmitryMorozov',
      isAdmin: true,
    },
    {
      id: 2,
      name: 'Max Kudr',
      isAdmin: true,
      image:
        'https://sun37-1.userapi.com/impg/3mge_x8OKZTJswN8w7XtPNxMuXYD7kabKtWzJQ/OEpwQcDow30.jpg?size=1439x2160&quality=96&sign=c4ab44275b5938d08f3ebc8f10cec423&type=album',
    },
    {
      id: 3,
      name: 'Tony Strap',
      isAdmin: true,
    },
    {
      id: 4,
      name: 'Dany Sydr',
      isAdmin: true,
    },
  ];

  const runQuiz = () => {
    console.log(`Run quiz ${quiz.id}`);
  };

  return (
    <Layout>
      <div className='room-wrapper'>
        <h2>{quiz.title}</h2>
        <Paper className='room-qr-wrapper'>
          <QRCodeSVG value='https://vk.com/id30412729/' className='room-qr' />
        </Paper>
        <Button
          variant='contained'
          endIcon={<ArrowForwardIosIcon />}
          onClick={() => runQuiz()}
          size='large'
          className='room-start-button'
        >
          Начать
        </Button>
      </div>
      <p className='room-user-counter'>{`Подключились ${users.length} человек(а)`}</p>
      <AvatarsStack users={users} className='room-user-avatars' />
    </Layout>
  );
};
