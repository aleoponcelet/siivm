import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { AdminContext, AdminContextTemp } from '../../../App';
// ========================================================

const AddService = () => {
  const [serviceInfo, setServiceInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newService = { ...serviceInfo };
    newService[e.target.name] = e.target.value;
    setServiceInfo(newService);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const onSubmit = () => {
    const formData = new FormData();
    // console.log(serviceInfo);
    formData.append('file', file);
    formData.append('titulo', serviceInfo.titulo);
    formData.append('descripcion', serviceInfo.descripcion);
    formData.append('modalidad', serviceInfo.modalidad);

    fetch('https://modulares-backend.herokuapp.com/nuevoServicio', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        handleServiceUpdate();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Allow access to Admin Only
  // Admin context from App.js
  // eslint-disable-next-line
  const [isAdmin, setIsAdmin] = useContext(AdminContext);
  // eslint-disable-next-line
  const [isAdminTemp, setIsAdminTemp] = useContext(AdminContextTemp);
  let history = useHistory();

  // If admin then allow
  useEffect(() => {
    if (isAdmin || isAdminTemp) {
      history.push('/nuevoServicio');
    } else {
      history.push('/');
    }
  }, [history, isAdmin, isAdminTemp]);

  // handle redirected to home
  function handleServiceUpdate() {
    history.push('/');
  }

  // React hook form for validation and error message
  const { register, handleSubmit, errors } = useForm();

  return (
    <div className='bg-white rounded my-4 p-4 mx-4'>
      <form onSubmit={handleSubmit(onSubmit)} className='event-form'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='form-group'>
              <label for='titulo'>Titulo del área/curso</label>
              <input
                className='form-control'
                onBlur={handleBlur}
                name='titulo'
                type='text'
                placeholder='Titulo'
                ref={register({ required: true })}
              />
              {errors.titulo && <span className='error'>Titulo es requerido.</span>}
            </div>
            <div className='form-group'>
              <label for='descripcion'>Descripción</label>
              <textarea
                className='form-control'
                onBlur={handleBlur}
                name='descripcion'
                placeholder='Descripción'
                rows='5'
                ref={register({ required: true })}
              ></textarea>

              {errors.descripcion && (
                <span className='error'>Descripción es requerida.</span>
              )}
            </div>
            
            </div>
          </div>

          <div className='col-md-6'>
            <label htmlFor='imageUpload'>Icono</label>
            <div class='form-group'>
              <label
                htmlFor='imageUpload'
                className='file-upload btn btn-outline-success btn-block w-50'
              >
                <FontAwesomeIcon
                  icon={faUpload}
                  className='mr-2'
                ></FontAwesomeIcon>
                Subir imagén
                <input
                  onChange={handleFileChange}
                  id='imageUpload'
                  name='imageUpload'
                  type='file'
                  ref={register({ required: true })}
                />
                {errors.imageUpload && (
                  <span className='error'>Icono es requerido</span>
                )}
              </label>
            </div>
          </div>
        
        <div className='row'>
          <div className='col-md-12'>
            <div class='text-right'>
              <button type='submit' className='btn btn-success'>
                Añadir
              </button>
            </div>
          </div>
        </div>
      </form>
      {/* <button className="btn btn-warning" onClick={onSubmit}>Add Bulk</button> */}
    </div>
  );
};

export default AddService;

/* 
$Price
<div className='form-group'>
              <label for='price'>Nivel</label>
              <input
                className='form-control'
                onBlur={handleBlur}
                name='price'
                type='text'
                placeholder='1, 2, 3'
                ref={register({ required: false })}
              />
                {errors.price && <span className='error'>Price is required</span>}
</div>
*/