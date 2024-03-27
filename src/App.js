import logo from './logo.svg';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import Dashbroad from './components/pages/dashbroad';
import Header from './components/layouts/header';
import Sidebar from './components/layouts/sidebar';


function App() {
  return (
      <div class="main-wrapper">
        <Header/>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Dashbroad/>}/>
        </Routes>
      </div>
  );
}

export default App;
