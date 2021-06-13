import React, { useEffect, useState } from 'react';
import PreLoader from '../../PreLoader/PreLoader';
import ItemMaestro from '../ItemMaestro/ItemMaestro';
import './BloqueProfesores.css';

const BloqueProfesores = () => {
  // Obtener datos:
  const [reviews, setReviews] = useState([]);

  // loader
  const [loading, setLoading] = useState(true);

  // Consumir api:
  useEffect(() => {
    fetch('https://modulares-backend.herokuapp.com/maestros')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className='client-feedback d-flex align-items-center justify-content-center my-5'  id='asesores'>
      <div className='container mb-5 mt-3'>
        <h3 className='text-center mb-5' style={{fontSize:'36px', fontWeight:'600'}}>
          <span style={{ color: '#171B4E' }}>Asesores</span>

        </h3>
        <PreLoader loading={loading} />
        <div className='row my-5'>
          {reviews.map((review) => (
            <ItemMaestro key={review._id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BloqueProfesores;
