import logo from './logo.svg';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import Dashbroad from './components/pages/dashbroad';
import Header from './components/layouts/header';
import Sidebar from './components/layouts/sidebar';
import Login from './components/pages/login';


function App() {
  const location = useLocation();

  const isHomeRoute = () => {
    return location.pathname === '/login';
  };

  return (
    <div>
      {!isHomeRoute() && <Header currentLocation={location.pathname}/>}
      {!isHomeRoute() && <Sidebar currentLocation={location.pathname}/>}
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='/' element={<Dashbroad/>}/>
      </Routes>
    </div>
  );
}

export default App;
