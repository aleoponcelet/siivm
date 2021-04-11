import React, {  useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { useHistory, useParams } from 'react-router-dom';
import { loggedInInfo } from '../../Login/loginManager';
// ========================================================

const PlaceOrder = () => {
  // Receive user clicked Service _id using useParams hook:
  const { _id } = useParams();
  console.log("....as",_id);
 
  // Set state fro service
  const [service, setService] = useState([]);

  // Get the single Service user clicked from API:
  useEffect(() => {
    fetch(`https://modulares-backend.herokuapp.com/servicios/${_id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [_id]);

  //Logged in User
  const loggedUser = loggedInInfo()

  // find the clicked Service:
  // const service = servicesData.find((id) => id._id == _id);
  
  // React hook form for extra form validation and error message
  const { register, handleSubmit, errors } = useForm();

  // handle redirected to user service
  let history = useHistory();
  function handleClientService() {
    history.push('/service-lists');
  }

  // When user registered send the data to server and redirect user to Client service list
  const onSubmit = (data) => {
    const newService = { ...data };
    newService.estado='Pendiente';
    newService.img = service.img 
    newService.image =service.imagen;
    
    fetch('https://modulares-backend.herokuapp.com/nuevoRegistro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          handleClientService();
        }
      });
  };

  return (
    <div className='rounded my-4 mx-4'>
      <form onSubmit={handleSubmit(onSubmit)} className='client-form'>
        <div className='row'>
          <div className='col-md-6 p-4'>
            <div className='form-group'>
              <input
                className='form-control'
                defaultValue={loggedUser.nombre}
                name='nombre'
                type='text'
                placeholder='Su nombre'
                ref={register({ required: true })}
              />
              {errors.name && <span className='error'>Nombre es requerido</span>}
            </div>
            <div className='form-group'>
              <input
                className='form-control'
                name='email'
                type='email'
                value={loggedUser.email}
                placeholder='Email'
                ref={register({ required: true })}
              />
              {errors.email && <span className='error'>Email es requerido</span>}
            </div>
            <div className='form-group'>
              <input
                className='form-control'
                name='titulo'
                type='text'
                value={service.titulo}
                placeholder='Titulo'
                ref={register({ required: true })}
              />
              {errors.title && <span className='error'>Titulo es requerido</span>}
            </div>
            <div className='form-group'>
              <textarea
                className='form-control'
                name='descripcion'
                placeholder='Descripción'
                rows='4'
                ref={register({ required: true })}
              ></textarea>

              {errors.description && (
                <span className='error'>Descripción es requerida</span>
              )}
            </div>

            <div className='row'>
              <div className='col-md-6'>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label
                    htmlFor='imageUpload'
                    className='file-upload btn btn-outline-success btn-block w-100'
                  >
                    <FontAwesomeIcon
                      icon={faUpload}
                      className='mr-0'
                    ></FontAwesomeIcon>{" "}
                    Añadir logo
                    <input id='imageUpload' name='imageUpload' type='file' />
                  </label>
                </div>
              </div>
            </div>
            <div className='text-left'>
              <button type='submit' className='btn btn-brand'>
                Registrar
              </button>
            </div>

          </div>
        </div>
      
      </form>

      {/* <button className="btn btn-warning" onClick={handleAddEvent}>Add Bulk</button> */}
    </div>
  );
};

export default PlaceOrder;

/*
$Price
    <div className='form-group'>
                  <input
                    className='form-control'
                    name='price'
                    type='text'
                    value={service.price}
                    placeholder='Price'
                    ref={register({ required: false })}
                  />
                  {errors.price && (
                    <span className='error'>Price is required</span>
                  )}
                </div>
*/