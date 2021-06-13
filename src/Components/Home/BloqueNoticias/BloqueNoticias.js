import React, { useEffect, useState } from 'react';
import PreLoader from '../../PreLoader/PreLoader';
import ItemNoticia from '../ItemNoticia/ItemNoticia';
import './BloqueNoticias.css';

const BloqueNoticias = () => {
  // Obtener datos:
  const [reviews, setReviews] = useState([]);

  // loader
  const [loading, setLoading] = useState(true);

  // Consumir api:
  useEffect(() => {
    fetch('https://modulares-backend.herokuapp.com/noticias')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className='client-feedback d-flex align-items-center justify-content-center my-5'>
      <div className='container mb-5 mt-3'>
        <h3 className='text-center mb-5' style={{fontSize:'36px', fontWeight:'600'}}>
          <span style={{ color: '#171B4E' }}>Nuevas </span>
          <span style={{ color: '#5E4CE7' }}>noticias</span>
        </h3>
        <PreLoader loading={loading} />
        <div className='row my-5'>
          {reviews.map((review) => (
            <ItemNoticia key={review._id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BloqueNoticias;
