import { Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import UserPage from './views/UserPage';
import './App.css';

function App() {
  return (
    <Routes> 
      <Route path="/" element={<HomePage />} />
      <Route path="/:userId" element={<UserPage />}/>      
    </Routes>
  );
}

export default App;