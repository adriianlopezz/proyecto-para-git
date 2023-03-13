import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/pages/navbar';
import Inicio from './components/pages/inicio';
import Pokemon from './components/pages/pokemon';
import Items from './components/pages/Item';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/' element={<Inicio />} />
          <Route path='Pokemon' element={<Pokemon />} />
          <Route path='Items' element={<Items />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
