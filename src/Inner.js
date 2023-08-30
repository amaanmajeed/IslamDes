import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import SingleVideoPage from './Pages/SingleVideoPage';
import Movies from './Pages/Movies';

export default function Inner() {
  // refresh window when we change route

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/video/:videoid" element={<SingleVideoPage />} />
      </Routes>
    </>
  );
}