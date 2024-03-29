import logo from './logo.svg';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import Header from './components/layouts/header';
import Sidebar from './components/layouts/sidebar';

import Dashbroad from './components/pages/dashbroad';
import Create_doctor from './components/pages/create_doctor';
import Profile from './components/pages/profile';
import Invoice_reports from './components/pages/invoice_reports';
import List_doctor from './components/pages/list_doctor';
import List_patient from './components/pages/list_patient';
import Department from './components/pages/department';
import List_booking from './components/pages/list_booking';
import Login from './components/pages/auth/login';


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
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Dashbroad/>}/>
      </Routes>
    </div>
  );
}

export default App;
