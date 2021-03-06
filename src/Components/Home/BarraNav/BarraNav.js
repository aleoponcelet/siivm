import React, { useContext } from 'react';
import './BarraNav.css';
import logo from '../../../assets/images/logos/logo.png';
import { Link } from 'react-router-dom';
import { AdminContext, AdminContextTemp, UserContext } from '../../../App';
// eslint-disable-next-line
import * as firebase from 'firebase/app';
import 'firebase/auth';
// eslint-disable-next-line
import { handleSignOut, isLoggedIn } from '../../Login/loginManager';
//=============================================================================

const BarraNav = () => {
  // Contesto de App.js
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // eslint-disable-next-line
  const [isAdmin, setIsAdmin] = useContext(AdminContext);
  // eslint-disable-next-line
  const [isAdminTemp, setIsAdminTemp] = useContext(AdminContextTemp);

  // está registrado
  const isLogged = isLoggedIn();

  // Manejar el botón de cierre de sesión
  const signOut = () => {
    setLoggedInUser({});
    sessionStorage.removeItem('token');
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light '>
      <Link to='/' className='navbar-brand' href='#'>
        <img src={logo} alt='creative-agency' />
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <ul className='navbar-nav  justify-content-between nav-link ml-auto align-items-md-center'>
          {/* Inicio Navegación*/}
          <li className="nav-item">
          <Link to='/inicio' className='nav-link  active mr-3'>
            Inicio
          </Link>
          </li>
          <li className="nav-item">
          <a className='nav-link mr-3' href='#galeria'>
           Galeria
          </a>
          </li>
          <li className="nav-item">
          <a className='nav-link mr-3' href='#asesores'>
           Asesores
          </a>
          </li>
          <li className="nav-item">
          <a className='nav-link mr-3' href='#contacto'>
            Contacto
          </a>
          </li>
         

<li className="nav-item">
{(loggedInUser.email || isLogged) && (
            <Link
              to={
                isAdminTemp || isAdmin
                  ? '/admin-lista-registros'
                  : '/service-lists'
              }
              className='nav-link'
            >
              <button
                type='button'
                className={
                  isAdminTemp || isAdmin
                    ? 'btn btn-dark w-100 px-4'
                    : 'btn btn-info w-100 px-3'
                }
              >
                {isAdminTemp || isAdmin ? 'Admin' : 'Panel'}
              </button>
            </Link>
          )}
</li>

<li className="nav-item">
{loggedInUser.email || isLogged ? (
            <Link to='/' className='nav-link'>
              <button
                onClick={signOut}
                type='button'
                className='btn btn-danger w-100 px-3'
              >
                Salir
              </button>
            </Link>
          ) : (
            <Link to='/login' className='nav-link'>
              <button type='button' className='btn btn-brand w-100 px-5'>
                Entrar
              </button>
            </Link>
          )}
</li>
          {/* Si el usuario no ha iniciado sesión, muestre Iniciar sesión o cerrar sesión  */}
      
        </ul>
      </div>
    </nav>
  );
};

export default BarraNav;
