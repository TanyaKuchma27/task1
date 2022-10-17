import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { fetchUsers } from "../../redux/operations";
import { getUsers } from "../../redux/usersSlice";

const BasicTable = () => { 
  const dispatch = useDispatch();
  const users = useSelector(getUsers.selectAll);  
  const isLoading = useSelector(({ users }) => users.isLoading);  

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]); 

  return (
    <>   
      {isLoading && <h2>Loading...</h2>}  
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
    </>
  );
}

export default BasicTable;