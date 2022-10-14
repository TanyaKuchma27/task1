import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import UserPage from './views/UserPage';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/:userId" element={<UserPage />}/>      
      </Routes>
    </Provider>
  );
}

export default App;