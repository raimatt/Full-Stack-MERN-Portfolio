import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';
import HomePage from './pages/HomePage';
import CarsPage from './pages/CarsPage';
import TopicsPage from './pages/TopicsPage';
import EditCarPageTable from './pages/EditCarPageTable';
import AddCarPageTable from './pages/AddCarPageTable';

function App() {
  const [car, setCar] = useState(null);

  return (
    <BrowserRouter>
      <header>
        <h1>Raiden Lazaro<img src='android-chrome-192x192.png' alt="Raiden Lazaro" /></h1>
      </header>
      <Navigation />
      <main>
        <section>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cars" element={<CarsPage setCar={setCar} />} />
            <Route path="/topics" element={<TopicsPage />} />
            <Route path="/create" element={<AddCarPageTable />} />
            <Route path="/update" element={<EditCarPageTable carToEdit={car} />} />
          </Routes>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Raiden Lazaro</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
