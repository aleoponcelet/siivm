import React, { useEffect, useState } from 'react';
import ItemArea from '../ItemArea/ItemArea';
import './BloqueAreas.css';
import PreLoader from '../../PreLoader/PreLoader';

const BloqueAreas = () => {
  // loader
  const [loading, setLoading] = useState(true);

  // Set data using hook:
  const [serviceData, setServiceData] = useState([]);

  // Get data from API and set the data:
  useEffect(() => {
    fetch('https://modulares-backend.herokuapp.com/servicios')
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className='services-container'>
      <div className='text-center'>
      <h3 className='text-center' style={{fontSize: '34px', fontWeight:'600', marginTop:'70px'}}>
          Registre su <span style={{ color: '#5E4CE7' }}>proyecto</span>
        </h3>
        <center className='text-black'>Selecione el área de participación adecuado para registrar su modular.</center>
      </div>
      <div className='d-flex justify-content-center'>
        <div className='w-75 row mt-2 pt-5 justify-content-center justify-content-between'>
          <PreLoader loading={loading} />
          {serviceData.map((service) => (
            <ItemArea service={service} key={service._id}></ItemArea>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BloqueAreas;
