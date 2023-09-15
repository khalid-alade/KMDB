import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Search from './pages/Search'
import NoPage from './pages/Search'
import App from './App';
import MoviePage from './components/MoviePage';
import Error from './components/Error';

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>

  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
