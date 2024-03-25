import logo from './logo.svg';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import Header from './components/layouts/header';


function App() {
  return (
    <div className="App">
      <div class="main-wrapper">
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
