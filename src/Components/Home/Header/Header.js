import React from 'react';
import BloqueNoticias from '../BloqueNoticias/BloqueNoticias';
import BloqueContacto from '../BloqueContacto/BloqueContacto';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import BloquePatrocinio from '../BloquePatrocinio/BloquePatrocinio';
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
      <BloquePatrocinio />
      <Services />
      <ProyectosGaleria />
      <BloqueNoticias />
      <Profesores />
      <BloqueContacto />
    </main>
  );
};

export default Header;
