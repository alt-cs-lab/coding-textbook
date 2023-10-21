import logo from './logo.svg';
import './App.css';
import TestPage from './views/TestPage';
import Navbar from './components/NavBar/index';
import LTIPage from './views/LTIPage';

import AssignedReadingView from './views/AssignedReadingView'
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import { useEffect } from 'react';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<AssignedReadingView />} />
        <Route path='/testpage' element={<TestPage />} />
        <Route path='/LTIPage' element={<LTIPage />} />
      </Routes>
    </Router>
  );
}

export default App;
