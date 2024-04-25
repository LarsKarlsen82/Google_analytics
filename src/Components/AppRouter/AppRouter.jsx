// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Home from '../../Pages/Home/Home';
import NoPage from '../../Pages/NoPage/NoPage';
import About from '../../Pages/About/About';
import Dogs from '../../Pages/Dogs/Dogs';


const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/dogs" element={<Dogs />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
