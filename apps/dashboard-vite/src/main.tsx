import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout.tsx';
import Dashboard from '@pages/Dashboard.tsx';
import Calendar from '@pages/Dates/Calendar.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />

          <Route path="/dates">
            <Route index element={<div>Calendars</div>} />
            <Route path="calendar" element={<Calendar />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
