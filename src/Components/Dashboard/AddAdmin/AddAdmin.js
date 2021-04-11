// eslint-disable-next-line
import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { AdminContext, AdminContextTemp, UserContext } from '../../../App';
// ========================================================

const AddAdmin = () => {
  // Context from app.js
  // eslint-disable-next-line
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // handle redirected to home
  let history = useHistory();
  function handleAdminUpdate() {
    history.push('/');
  }

  // handle Add admin when form Submit:
  const onSubmit = (data) => {
    const newAdmin = { ...data };
    console.log('new ad', newAdmin);

    fetch('https://modulares-backend.herokuapp.com/nuevoAdmin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newAdmin),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          handleAdminUpdate();
        }
      });
  };

    // Allow access to Admin Only
  // Admin context from App.js
  // eslint-disable-next-line
  const [isAdmin, setIsAdmin] = useContext(AdminContext);
  // eslint-disable-next-line
  const [isAdminTemp, setIsAdminTemp] = useContext(AdminContextTemp);
  
  // habilitar panel admin
  /* useEffect(() => {
    if (isAdmin || isAdminTemp) {
      history.push('/makeAdmin');
    } else {
      history.push('/');
    }
  }, [history, isAdmin, isAdminTemp]);
*/

  // handle redirected to home
  // eslint-disable-next-line
  function handleServiceUpdate() {
    history.push('/');
  }

  // React hook form for validation and error message
  const { register, handleSubmit, errors } = useForm();

  return (
    <div className='rounded bg-white my-4 mx-4 p-4'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='row'>
          <div className='col-md-6 d-flex'>
            <div className='form-group mr-3 w-100'>
              <input
                className='form-control'
                name='email'
                type='email'
                placeholder='admin@uteg.edu.mx'
                ref={register({ required: true })}
              />
              {errors.email && <span className='error'>Email es requerido</span>}
            </div>

            <div className='text-left'>
              <button type='submit' className='btn btn-success'>
                Añadir
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* <button className="btn btn-warning" onClick={handleAddEvent}>Add Bulk</button> */}
    </div>
  );
};

export default AddAdmin;
