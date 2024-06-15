import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Verify from './components/Verify/Verify';
import Vote from './components/Vote/Vote';
import Central from './components/Central/Central';
import Admin from './components/Admin/Admin';
import NotACE from './components/Return/NotACE/NotACE';
import Finish from './components/Return/Finish/Finish';

const App = () => {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route exact path="/" element={<Verify />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/central" element={<Central />} />
          <Route path="/notace" element={<NotACE />} />
          <Route path="/finish" element={<Finish />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
