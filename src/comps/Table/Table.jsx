import * as React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const BasicTable = () => { 
  const [users, setUsers] = useState([]);

  useEffect(() => {
  axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => setUsers(res.data))
    .catch((err) => console.log(err));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(({ id, name, username, email, phone, website }) => (
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{name}</TableCell>
              <TableCell align="right">{username}</TableCell>
              <TableCell align="right">{email}</TableCell>
              <TableCell align="right">{phone}</TableCell>
              <TableCell align="right">{website}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;