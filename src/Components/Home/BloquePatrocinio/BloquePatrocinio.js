import React from 'react';
import google from '../../../assets/images/logos/udg.jpg';
import uber from '../../../assets/images/logos/jalisco2.jpg';
import netflix from '../../../assets/images/logos/tl2.png';
import airbnb from '../../../assets/images/logos/tl1.png';
import './BloquePatrocinio.css';

const BloquePatrocinio = () => {
  return (
    <section className='d-flex justify-content-center'>
      <div className='client row'>
        <div className='col-md-12 text-white client-img'>
          <img className='google' src={google} alt='' />
          <img className='uber' src={uber} alt='' />
          <img className='netflix' src={netflix} alt='' />
          <img className='airbnb' src={airbnb} alt='' />
        </div>
      </div>
    </section>
  );
};

export default BloquePatrocinio;
