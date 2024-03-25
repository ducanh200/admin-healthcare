import logo from './logo.svg';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import Dashbroad from './components/pages/dashbroad';


function App() {
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
