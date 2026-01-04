import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HotelProvider } from './context/HotelContext';
import { ToastProvider } from './context/ToastContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Restaurant from './pages/Restaurant';
import Services from './pages/Services';
import Admin from './pages/Admin';

import Login from './pages/Login';
import ProtectedRoute from './components/layout/ProtectedRoute';

function App() {
  return (
    <ToastProvider>
      <HotelProvider>
        <Router basename="/hotel_management">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/restaurant" element={<Restaurant />} />
              <Route path="/services" element={<Services />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } />
            </Routes>
          </Layout>
        </Router>
      </HotelProvider>
    </ToastProvider>
  );
}

export default App;
