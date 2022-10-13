import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';

const UsersContext = createContext();

export const useUsers = () => useContext(UsersContext);

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    getListUsers()
  }, []);

  async function getListUsers() {
    try {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <UsersContext.Provider value={{ users }}>
      {children}
    </UsersContext.Provider>
  );
};