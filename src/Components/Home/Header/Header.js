import React from 'react';
import BloqueNoticias from '../BloqueNoticias/BloqueNoticias';
import Contactarnos from '../Contactarnos/Contactarnos';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import TopClients from '../TopClients/TopClients';
import ProyectosGaleria from '../ProyectosGaleria/ProyectosGaleria';
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
      <ProyectosGaleria />
      <BloqueNoticias />
      <Profesores />
      <Contactarnos />
    </main>
  );
};

export default Header;
