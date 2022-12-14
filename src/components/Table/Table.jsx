import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper }  from '@mui/material';

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
            <TableCell align="right">Info</TableCell>
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
              <TableCell align="right">
                <Link to={`/${id}`}>more info</Link>                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;