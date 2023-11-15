import logo from './logo.svg';
import './App.css';
import TestPage from './views/TestPage';
import Navbar from './components/NavBar/index';
import { BrowserRouter as Router, Routes, Route, useHref }
    from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
    fetch('/api').then(response => response.json()).then(data => console.log(data))
    fetch('/api/logged_in').then(response => response.json()).then(data => console.log(data))
  }, [])
  if (loggedIn) {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/testpage' element={<TestPage />} />
        </Routes>
      </Router>
    );
  }
  else {
    return(
      <>
        <p>Please login test</p>
      </>
    )
  }
  
}

export default App;
