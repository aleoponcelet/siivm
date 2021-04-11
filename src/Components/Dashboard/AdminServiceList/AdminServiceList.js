import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AdminContext, AdminContextTemp } from '../../../App';
import PreLoader from '../../PreLoader/PreLoader';
// ==============================================================================

const AdminServiceList = () => {
  // This is table showed in the Admin Dashboard with List of service register
  // Set List of service register:
  const [serviceList, setServiceList] = useState([]);
  const [selectService, setSelectService] = useState({});

    // loader
    const [loading, setLoading] = useState(true);

  // Get all the Volunteer Register
  useEffect(() => {
    fetch('https://modulares-backend.herokuapp.com/adminServicios')
      .then((res) => res.json())
      .then((data) => {
        setServiceList(data);
        setLoading(false);
      });
  }, [serviceList]);

  // Update when admin change estado and update the dashboard
  const updateStatus = (estado) => {
    const data = { _id: selectService._id, estado };
    console.log(selectService, 'estado', estado);

    fetch(
      `https://modulares-backend.herokuapp.com/actEstadoServicio/${data._id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then((result) => {
        if (result) {
          console.log(result);
        }
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
       history.push('/admin-service-lists');
     } 
         else {
       history.push('/');
     }
   }, [history, isAdmin, isAdminTemp]);

  let serialNo = 1;

  return (
    <>
      <div className='table-responsive'>
        <table className='table table-borderless table-hover bg-white rounded my-4'>
          <thead className='thead-light'>
            <tr>
              <th className='text-secondary text-left' scope='col'>
                #
              </th>
              <th className='text-secondary' scope='col'>
                Nombre
              </th>
              <th className='text-secondary' scope='col'>
                Email
              </th>
              <th className='text-secondary' scope='col'>
                Área/Curso
              </th>
              <th className='text-secondary' scope='col'>
                Descripción
              </th>
              <th className='text-secondary' scope='col'>
                Estado
              </th>
            </tr>
          </thead>
          <tbody>
            {serviceList.map((service) => (
              <tr key={service._id}>
                <td>{serialNo++}</td>
                <td>{service.nombre}</td>
                <td>{service.email}</td>
                <td>{service.titulo}</td>
                <td>{service.descripcion}</td>

                <td className='text-center'>
                  <select
                    onClick={() => setSelectService(service)}
                    onChange={(e) => updateStatus(e.target.value)}
                    className={// eslint-disable-next-line
                      service.estado == 'Pendiente'
                        ? 'btn btn-danger' // eslint-disable-next-line
                        : service.estado == 'Aceptado'
                        ? 'btn btn-success' // eslint-disable-next-line
                        : service.estado == 'Revisión'
                        ? 'btn btn-warning'
                        : 'btn btn-dark'
                    }
                  >
                    <option // eslint-disable-next-line
                      selected={service.estado == 'Pendiente'}
                      className='bg-white text-secondary'
                    >
                      Pendiente
                    </option>
                    <option // eslint-disable-next-line
                      selected={service.estado == 'Revisión'}
                      className='bg-white text-secondary'
                    >
                      Revisión
                    </option>
                    <option // eslint-disable-next-line
                      selected={service.estado == 'Aceptado'}
                      className='bg-white text-secondary'
                    >
                      Aceptado
                    </option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <PreLoader loading={loading} />
      </div>
    </>
  );
};

export default AdminServiceList;
