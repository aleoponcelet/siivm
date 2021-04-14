import React from 'react';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Contactarnos from '../Contactarnos/Contactarnos';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import TopClients from '../TopClients/TopClients';
import WorksCarousel from '../WorksCarousel/WorksCarousel';
import Profesores from '../Profesores/Profesores';

import './Header.css';

const Header = () => {
  document.title = "SIIVM | Sistema Integral de Información y Validación Modular";
  return (
    <main>
      <div className='header-container container'>
        <Navbar></Navbar>
        <HeaderMain></HeaderMain>
      </div>
      <TopClients />
      <Services />
      <WorksCarousel />
      <ClientFeedback />
      <Profesores />
      <Contactarnos />
    </main>
  );
};

export default Header;
