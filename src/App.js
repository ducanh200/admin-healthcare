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
import List_booking from './components/pages/list_booking';
import Login from './components/pages/auth/login';
import Department from './components/pages/department';
import { ToastContainer, toast } from 'react-toastify';
import Status_1 from './components/pages/booking/status_1';


function App() {
  const location = useLocation();

  const isHomeRoute = () => {
    return location.pathname === '/login';
  };

  return (
    <>
    <div>
      {!isHomeRoute() && <Header currentLocation={location.pathname}/>}
      {!isHomeRoute() && <Sidebar currentLocation={location.pathname}/>}
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashbroad' element={<Dashbroad/>}/>
        <Route path='/create_doctor' element={<Create_doctor/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/invoice_reports' element={<Invoice_reports/>}/>
        <Route path='/list_doctor' element={<List_doctor/>}/>
        <Route path='/list_patient' element={<List_patient/>}/>
        <Route path='/department' element={<Department/>}/>
        <Route path='/list_booking' element={<List_booking/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/' element={<Dashbroad/>}/>
        <Route path='/department' element={<Department/>}/>
        <Route path='/arrived' element={<Status_1/>}/>
      </Routes>
   

    </div>
       <ToastContainer
       position="top-right"
       autoClose={5000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="light"
       />
       </>
  );
}

export default App;
