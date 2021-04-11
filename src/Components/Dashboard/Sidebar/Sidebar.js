// eslint-disable-next-line
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faHdd,
  faCommentAlt,
  faPlus,
  faUserPlus,
  // eslint-disable-next-line
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line
import { AdminContext, AdminContextTemp, UserContext } from '../../../App';

const Sidebar = () => {
  // Admin context from App.js
  // eslint-disable-next-line
  const [isAdmin, setIsAdmin] = useContext(AdminContext);
  // eslint-disable-next-line
  const [isAdminTemp, setIsAdminTemp] = useContext(AdminContextTemp);

  return (
    <div className='sidebar d-flex flex-column justify-content-between py-5 px-4'>
      <ul className='list-unstyled'>
        
        {isAdmin || isAdminTemp ? (
          <>
            <li>
              <Link to='/admin-service-lists' className='text-dark'>
                <FontAwesomeIcon icon={faHdd} /> <span>Registros</span>
              </Link>
            </li>
            <li>
              <Link to='/nuevoServicio' className='text-dark'>
                <FontAwesomeIcon icon={faPlus} /> <span>Añadir servicio</span>
              </Link>
            </li>
            <li>
              <Link to='/makeAdmin' className='text-dark'>
                <FontAwesomeIcon icon={faUserPlus} /> <span>Crear admin</span>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to='/order' className='text-dark'>
                <FontAwesomeIcon icon={faShoppingCart} /> <span>Registrar</span>
              </Link>
            </li>

            <li>
              <Link to='/service-lists' className='text-dark'>
                <FontAwesomeIcon icon={faHdd} /> <span>Mis registros</span>
              </Link>
            </li>

            <li>
              <Link to='/add-feedback' className='text-dark'>
                <FontAwesomeIcon icon={faCommentAlt} /> <span>Noticias</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
