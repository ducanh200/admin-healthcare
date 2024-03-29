import logo from './logo.svg';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import Header from './components/layouts/header';
import Sidebar from './components/layouts/sidebar';

import Dashbroad from './components/pages/dashbroad';


function App() {
  const location = useLocation();

  const isHomeRoute = () => {
    return location.pathname === '/login';
  };

  return (
    <div className="App">
      <div class="main-wrapper">
        <Routes>
          <Route path='/' element={<Dashbroad/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
