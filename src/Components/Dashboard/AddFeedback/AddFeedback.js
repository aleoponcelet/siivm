import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import { loggedInInfo } from '../../Login/loginManager';
// ========================================================

const AddFeedback = () => {
  // Context from app.js
  // eslint-disable-next-line
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // Logged in user info from session storage:
  const loggedInUserInfo = loggedInInfo();

  // handle redirected to home
  let history = useHistory();
  function handleEventUpdate() {
    history.push('/');
  }

  // handle Add Review:
  const onSubmit = (data) => {
    const newReview = { ...data };
    newReview.img = loggedInUser.email
      ? loggedInUser.photo
      : loggedInUserInfo.picture;

    fetch('https://modulares-backend.herokuapp.com/nuevaNoticia', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          handleEventUpdate();
        }
      });
  };

  // React hook form for validation and error message
  const { register, handleSubmit, errors } = useForm();

  return (
    <div className='rounded my-4 mx-4'>
      <form onSubmit={handleSubmit(onSubmit)} className='client-form'>
        <div className='row'>
          <div className='col-md-6 p-4'>
            <div className='form-group'>
              <input
                className='form-control'
                defaultValue={loggedInUser.nombre}
                name='nombre'
                type='text'
                placeholder='Nombre del usuario'
                ref={register({ required: true })}
              />
              {errors.name && <span className='error'>Nombre es requerido.</span>}
            </div>
            <div className='form-group'>
              <input
                className='form-control'
                name='titulo'
                type='text'
                placeholder='Titulo'
                ref={register({ required: true })}
              />
              {errors.titulo && (
                <span className='error'>Titulo es requerido.</span>
              )}
            </div>

            <div className='form-group'>
              <textarea
                className='form-control'
                name='descripcion'
                placeholder='Descripción'
                rows='4'
                ref={register({ required: true })}
              ></textarea>

              {errors.descripcion && (
                <span className='error'>Descripción es requerida.</span>
              )}
            </div>

            <div className='text-left'>
              <button type='submit' className='btn btn-brand'>
                Publicar
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* <button className="btn btn-warning" onClick={onSubmit}>Add Bulk</button> */}
    </div>
  );
};

export default AddFeedback;
