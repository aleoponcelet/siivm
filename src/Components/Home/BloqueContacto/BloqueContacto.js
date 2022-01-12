import React from 'react';
// eslint-disable-next-line
import { useForm } from 'react-hook-form';
import maestro4 from '../../../assets/images/people/m4.jpg';

const BloqueContacto = () => {
   return (
    <section style ={{backgroundColor:'#ccc'}} className='contact-section d-flex justify-content-center align-items-center flex-column mt-5 py-3' id='contacto'>
      <div className='w-75 row mt-3 pt-5 justify-content-between justify-content-center'>
        <div className='col-md-6'>
          <h3 style={{fontSize:'34px', fontWeight:'600'}} className='mb-4'>
            ¿Dudas?
          </h3>
          <p>
            Envie un correo y nos pondremos en contacto con usted.
          </p>
          <img className='maestro3' src={maestro4} alt='' />
          <p>Juan Torres<br />Encargado de Modulares<br /> email@test.com</p>
 
        </div>

        <div className='col-md-6'>
          <form action="https://formspree.io/f/mbjqrldd" method="POST" className='event-form'>
            <div className='form-group'>
              <input
                className='form-control'
                name='email'
                type='email'
                placeholder='E-mail'
                required
              />
              
            </div>
            <div className='form-group'>
              <input
                className='form-control'
                name='name'
                type='text'
                placeholder='Nombre'
                required
              />
              
            </div>
            <div className='form-group'>
              <textarea
                className='form-control'
                name='message'
                placeholder='Mensaje...'
                rows='6'
                required
              ></textarea>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div>
                  <button type='submit' className='btn btn-brand'>
                    Enviar!
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-md-12 text-center text-dark mt-5'>
          <p>{new Date().getFullYear()}</p>

        </div>
      </div>
    </section>
  );
};

export default BloqueContacto;
