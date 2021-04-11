import React from 'react';
import frame from '../../../assets/images/logos/frame2.png';

const HeaderMain = () => {
  return (
    <main style={{ height: '480px' }} className='row d-flex align-items-center justify-content-center mt-0 '>
      <div className='col-md-5'>
        <h1 style={{ fontWeight: '700', fontSize:'48px' }} className='mb-4'>
          <span style={{ color: '#1D2C49' }}>Proyectos Modulares UTEG<br/> </span>
          <span style={{ color: '#5F4DE8' }}>2021</span>
        </h1>

        <p style={{color: '#000', fontSize:'16px'}} className='mb-4'>
        Una competencia contra reloj en la que los participantes podrán buscar soluciones en grupo a problemáticas sociales, tecnológicas y/o sustentables con la asesoría y acompañamiento de profesores expertos en distintas ramas.        </p>
        <p>La presentación se llevará acabo del 08 al 12 de Noviembre de 2021. Registra tu proyecto ó participa en algun curso de tu interes.</p>
      

      </div>

      <div className='col-md-6'>
        <img src={frame} alt='' className='img-fluid w-100' />
      </div>
      

    </main>
  );
};

export default HeaderMain;

/*       Boton
      <form action="#contacto">
        <input type="submit" value="Más info" />
      </form>

       */