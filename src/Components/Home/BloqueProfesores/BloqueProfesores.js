import React from 'react';
import maestro1 from '../../../assets/images/people/m1.jpg';
/* import maestro2 from '../../../assets/images/people/m2.jpg';
import maestro3 from '../../../assets/images/people/m3.jpg';
import maestro4 from '../../../assets/images/people/m4.jpg';
import maestro5 from '../../../assets/images/people/m5.jpg'; */
import './BloqueProfesores.css';

const BloqueProfesores = () => {
  return (
    <section className='d-flex justify-content-center' id='profesores'>
        <div className='container mb-5 mt-3'>
        <h3 className='text-center' style={{fontSize: '34px', fontWeight:'600', marginTop:'70px'}}>
          Profesores
        </h3>
        <center className='text-black'>¿Necesitas un asesor? Contactalo.</center>
      <div className=' justify-content-center justify-content-between'>
        <div className='client-img row my-5'>
          <img className='maestro1' src={maestro1} alt='' />
          <p>Mario Meza<br />Ing. Atomico<br /> mario.meza@gmail.com</p>
          <img className='maestro1' src={maestro1} alt='' />
          <p>Mario Gonzalez<br />Ing. Nuclear<br /> mario.gonzalez@gmail.com</p>
          <img className='maestro1' src={maestro1} alt='' />
          <p>Mario Lopez<br />Ing. Industrial<br /> mario.lopez@gmail.com</p>
 
        </div>
      </div>
      </div>
    </section>
  );
};

export default BloqueProfesores;
