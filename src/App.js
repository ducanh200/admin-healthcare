
import './App.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Header from './components/layouts/header';
import Sidebar from './components/layouts/sidebar';
import Dashbroad from './components/pages/dashbroad';
import Profile from './components/pages/profile';
import Invoice_reports from './components/pages/invoice_reports';
import List_doctor from './components/pages/list_doctor';
import List_patient from './components/pages/list_patient';
import List_booking from './components/pages/list_booking';
import Login from './components/pages/auth/login';
import Department from './components/pages/department';
import Medicine from './components/pages/medicine';
import { ToastContainer, toast } from 'react-toastify';
import Status_1 from './components/pages/booking/status_1';
import Create_doctor from './components/pages/doctor/create_doctor';
import Profile_Patient from './components/pages/profile_patient';
import { useJwt } from 'react-jwt';



function App() {
  const ProtectedRoute = ({ element }) => {
    const token = localStorage.getItem("accessToken");
    const { isExpired, isInvalid } = useJwt(token);

    if (!token || isExpired || isInvalid) {
        localStorage.removeItem("accessToken");
        return <Navigate to="/login" />;
    }

    return element;
};

const ProtectedLoginRoute = ({ element }) => {
  const token = localStorage.getItem("accessToken");
  const { isExpired, isInvalid } = useJwt(token);

  if (token && !isExpired && !isInvalid) {
      return <Navigate to="/dashboard" />;
  }

  return element;
};

  const location = useLocation();
  const isLoginPage = location.pathname === '/login';


  const isHomeRoute = () => {
    return location.pathname === '/login';
  };

  return (
    <>
    <div>
    {!isLoginPage && (
          <>
            <Header />
            <Sidebar />
          </>
        )}
      {!isHomeRoute() && <Header currentLocation={location.pathname}/>}
      {!isHomeRoute() && <Sidebar currentLocation={location.pathname}/>}
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashbroad/>}/>
        <Route path='/create_doctor' element={<Create_doctor/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/invoice_reports' element={<Invoice_reports/>}/>
        <Route path='/list_doctor' element={<List_doctor/>}/>
        <Route path='/list_patient' element={<List_patient/>}/>
        <Route path='/department' element={<Department/>}/>
        <Route path='/list_booking' element={<List_booking/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/' element={<Dashbroad/>}/>
        <Route path='/arrived' element={<Status_1/>}/>
        <Route path='/medicine' element={<Medicine/>}/>
        <Route path='/profile_patient/:id' element={<Profile_Patient/>}/>
       

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
