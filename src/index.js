import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Calculator from './Containers/Calculator';
import Home from './Containers/Home';
import Quote from './Containers/Quote';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
