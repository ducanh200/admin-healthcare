import './App.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Header from './components/layouts/header';
import Sidebar from './components/layouts/sidebar';
import Dashbroad from './components/pages/dashbroad';
import Profile from './components/pages/profile';
import Invoice_reports from './components/pages/invoice_reports';
import List_patient from './components/pages/list_patient';
import List_booking from './components/pages/list_booking';
import Login from './components/pages/auth/login';
import Department from './components/pages/department';
import Medicine from './components/pages/medicine';
import { ToastContainer } from 'react-toastify';
import Status_1 from './components/pages/booking/status_1';

import List_doctor from './components/pages/list_doctor';

function App() {
  const location = useLocation();
  const token = localStorage.getItem("accessToken");

  const isLoggedIn = token !== null;

  const isLoginPage = location.pathname === '/login';

  return (
    <>
      <div>
        {!isLoginPage && isLoggedIn && (
          <>
            <Header />
            <Sidebar />
          </>
        )}
        {!isLoginPage && !isLoggedIn && (
          <Navigate to="/login" />
        )}
        {!isLoginPage && <Header currentLocation={location.pathname}/>}
        {!isLoginPage && <Sidebar currentLocation={location.pathname}/>}
        <Routes>
          <Route path='/login' element={<Login/>}/>
          {isLoggedIn && (
            <>
              <Route path='/dashboard' element={<Dashbroad/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/invoice_reports' element={<Invoice_reports/>}/>
              <Route path='/list_doctor' element={<List_doctor/>}/>
              <Route path='/list_patient' element={<List_patient/>}/>
              <Route path='/department' element={<Department/>}/>
              <Route path='/list_booking' element={<List_booking/>}/>
              <Route path='/arrived' element={<Status_1/>}/>
              <Route path='/medicine' element={<Medicine/>}/>
            </>
          )}
        </Routes>
        {!isLoginPage && (
          <>
            {/* <Footer /> */}
          </>
        )}
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
