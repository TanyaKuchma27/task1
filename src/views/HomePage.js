/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect } from 'react';
import BasicTable from '../components/Table/Table';

export default function HomePage({ users }) {
  useEffect(() => {
    getListUsers()
  }, []);

  async function getListUsers() {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users'); 
      users(data);
    } catch (error) {
      console.log(error)
    }
  }

  return (    
    <BasicTable/>
  );
}