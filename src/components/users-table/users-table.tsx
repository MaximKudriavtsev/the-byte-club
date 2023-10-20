import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const getPlace = (index: number) => {
  if (index === 1) return '🥇';
  if (index === 2) return '🥈';
  if (index === 3) return '🥉';
  return index;
};

function createData(name: string, time: number, score: number) {
  return { name, time, score };
}

const rows = [
  createData('Юля', 159, 1540),
  createData('Ваня', 237, 1200),
  createData('Татьяна', 262, 1120),
  createData('Василий', 305, 800),
  createData('Владимир', 356, 450),
  createData('Ольга', 356, 450),
  createData('Николай', 356, 450),
];

export const UsersTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Участник</TableCell>
            <TableCell align='right'>Время</TableCell>
            <TableCell align='right'>Очки</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row' width={10}>
                {getPlace(index + 1)}
              </TableCell>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.time}</TableCell>
              <TableCell align='right'>{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
