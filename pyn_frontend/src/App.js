import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Benefits from './components/benefits';
import Login from './components/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/benefits" element={<Benefits />} />
      </Routes>
    </Router>
  );
}

export default App;
