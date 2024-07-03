import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../modules/components/Homes/Home';
import About from '../modules/components/About/About';
import Galery from '../modules/components/Galery/Galery';
import Error404 from '../layouts/components/PesanError/Error404';
import MasterData from '../modules/components/Master-Data/MasterData';
import Detail from '../modules/components/Detail/Detail';
import Contact from '../modules/components/Contact/Contact';
import Testimoni from '../modules/components/Testimoni/Testimoni';

export default function BasePages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/master-data" element={<MasterData />} />
      <Route path="/galery" element={<Galery />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/testimoni" element={<Testimoni />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
