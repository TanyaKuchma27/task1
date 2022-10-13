import { Routes, Route } from 'react-router-dom';
import { UsersProvider  } from './context/usersContext';
import HomePage from './views/HomePage';
import UserPage from './views/UserPage';
import './App.css';

function App() {
  return (
    <UsersProvider>
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/:userId" element={<UserPage />}/>      
      </Routes>
    </UsersProvider>
  );
}

export default App;