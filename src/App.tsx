import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import About from './pages/About';
import CaseStudy from './pages/CaseStudy';
import ContactMe from './pages/ContactMe';

function App() {
  return (
      <>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/about-me" element={<About/>} />
        <Route path="/case-study/job.ai" element={<CaseStudy/>}  />
        <Route path="/contact-me" element={<ContactMe/>}  />
      </Routes>
    </>
  );
}

export default App;
