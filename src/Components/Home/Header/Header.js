import React from 'react';
import BloqueNoticias from '../BloqueNoticias/BloqueNoticias';
import BloqueContacto from '../BloqueContacto/BloqueContacto';
import BloqueInicio from '../BloqueInicio/BloqueInicio';
import BarraNav from '../BarraNav/BarraNav';
import BloqueAreas from '../BloqueAreas/BloqueAreas';
import BloquePatrocinio from '../BloquePatrocinio/BloquePatrocinio';
import BloqueGaleria from '../BloqueGaleria/BloqueGaleria';
import BloqueProfesores from '../BloqueProfesores/BloqueProfesores';

import './Header.css';

const Header = () => {
  document.title = "SIIVM | Sistema Integral de Información y Validación Modular";
  return (
    <main>
      <div className='header-container container'>
        <BarraNav />
        <BloqueInicio />
      </div>
      <BloquePatrocinio />
      <BloqueAreas />
      <BloqueGaleria />
      <BloqueNoticias />
      <BloqueProfesores />
      <BloqueContacto />
    </main>
  );
};

export default Header;
