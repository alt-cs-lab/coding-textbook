import logo from './logo.svg';
import './App.css';
import TestPage from './views/TestPage';
import Navbar from './components/NavBar/index';

import AssignedReadingView from './views/AssignedReadingView'
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<AssignedReadingView />} />
        <Route path='/testpage' element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
