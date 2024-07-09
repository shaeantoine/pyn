import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Benefits from './components/benefits';
import TeamBenefits from './components/teambenefits';
import AllBenefits from './components/allbenefits';
import Login from './components/login'
import Header from './components/header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/team-benefits" element={<TeamBenefits />} />
        <Route path="/all-benefits" element={<AllBenefits />} />
      </Routes>
    </Router>
  );
}

export default App;

