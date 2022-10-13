import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { UsersContext  } from './context/usersContext';
import HomePage from './views/HomePage';
import UserPage from './views/UserPage';
import './App.css';

function App() {
  const [people, setPeople] = useState([]);

  return (
    <UsersContext.Provider value={{ users: people }}>
      <Routes> 
        <Route path="/" element={<HomePage users={setPeople} />} />
        <Route path="/:userId" element={<UserPage/>}/>      
      </Routes>
    </UsersContext.Provider>
  );
}

export default App;