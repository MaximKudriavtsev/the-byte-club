import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { usePageContext } from '../../context/page-context';

const getPlace = (index: number) => {
  if (index === 1) return '🥇';
  if (index === 2) return '🥈';
  if (index === 3) return '🥉';
  return index;
};

export const UsersTable = () => {
  const { state } = usePageContext();

  const rows = state.table || [];

  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Участник</TableCell>
            <TableCell align='right'>Время</TableCell>
            <TableCell align='right'>Очки</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => {
            return (
              <TableRow
                key={`${row.userId}_${Date.now()}`}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                selected={row.userId === state.user.id}
              >
                <TableCell component='th' scope='row' width={10}>
                  {getPlace(index + 1)}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='right'>{row.time}</TableCell>
                <TableCell align='right'>{row.score}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
