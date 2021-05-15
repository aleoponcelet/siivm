import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './BloqueGaleria.css';
import card_01 from '../../../assets/images/cards/card_01.jpg';
import card_02 from '../../../assets/images/cards/card_02.jpg';
import card_03 from '../../../assets/images/cards/card_03.jpg';
import card_04 from '../../../assets/images/cards/card_04.jpg';
import card_05 from '../../../assets/images/cards/card_05.jpg';
import card_06 from '../../../assets/images/cards/card_06.jpg';
import card_07 from '../../../assets/images/cards/card_07.jpg';
import card_08 from '../../../assets/images/cards/card_08.jpg';
import card_09 from '../../../assets/images/cards/card_09.jpg';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className='item'>
    <img src={card_01} className='carousel-img' alt="ejemplo mod 1"/>
  </div>,
  <div className='item'>
    <img src={card_02} className='carousel-img' alt="ejemplo mod 2"/>
  </div>,
  <div className='item'>
    <img src={card_03} className='carousel-img' alt="ejemplo mod 3"/>
  </div>,
  <div className='item'>
    <img src={card_04} className='carousel-img' alt="ejemplo mod 4"/>
  </div>,
  <div className='item'>
    <img src={card_05} className='carousel-img' alt="ejemplo mod 5"/>
  </div>,
  <div className='item'>
    <img src={card_06} className='carousel-img' alt="ejemplo mod 6"/>
  </div>,
  <div className='item'>
    <img src={card_07} className='carousel-img' alt="ejemplo mod 7"/>
  </div>,
  <div className='item'>
    <img src={card_08} className='carousel-img' alt="ejemplo mod 8"/>
  </div>,
  <div className='item'>
    <img src={card_09} className='carousel-img' alt="ejemplo mod 9"/>
  </div>,
];

const BloqueGaleria = () => {
  return (
    <section className='carousel-section mt-5' id='galeria'>
      <h3 className='text-center' style={{fontSize: '34px', fontWeight:'600', marginTop:'70px'}}>
        <span style={{ color: '#1D2C49' }}>Galeria</span>
      </h3>
      <center style={{ color: '#000' }}>Echa un vistazo sobre los proyectos que seran presentados.</center>

      <AliceCarousel mouseTracking items={items} responsive={responsive} />
    </section>
  );
};

export default BloqueGaleria;