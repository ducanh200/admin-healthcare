import logo from './logo.svg';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import Header from './components/layouts/header';
import Sidebar from './components/layouts/sidebar';

import Dashbroad from './components/pages/dashbroad';
import Medicine from './components/pages/medicine';
import Doctor from './components/pages/doctor';
import Profile from './components/pages/profile';
import Invoice_reports from './components/pages/invoice_reports';
import List_doctor from './components/pages/list_doctor';
import List_patient from './components/pages/list_patient';
import Login from './components/pages/login';
import Department from './components/pages/department';
import List_booking from './components/pages/list_booking';

function App() {
  const location = useLocation();

  const isHomeRoute = () => {
    return location.pathname === '/login';
  };

  return (
    <div className="App">
      <div class="main-wrapper">
        <Header></Header> 
        <Sidebar></Sidebar>
        <Routes>
          <Route path='/dashbroad' element={<Dashbroad/>}/>
          <Route path='/medicine' element={<Medicine/>}/>
          <Route path='/doctor' element={<Doctor/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/invoice_reports' element={<Invoice_reports/>}/>
          <Route path='/list_doctor' element={<List_doctor/>}/>
          <Route path='/list_patient' element={<List_patient/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/department' element={<Department/>}/>
          <Route path='/list_booking' element={<List_booking/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
