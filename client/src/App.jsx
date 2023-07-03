import React from 'react';
import './App.css';
import Aire from './component/Chat';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Aire' element={<Aire />} />
        </Routes>
      </Router>
      <Analytics/>
    </div>
  );
}

export default App;
