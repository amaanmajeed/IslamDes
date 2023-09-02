import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import SingleVideoPage from './Pages/SingleVideoPage';
import Movies from './Pages/Movies';

export default function Inner() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:series" element={<Movies/>} />
        <Route path="/video/:jsonName/:videoid" element={<SingleVideoPage />} />
      </Routes>
    </>
  );
}