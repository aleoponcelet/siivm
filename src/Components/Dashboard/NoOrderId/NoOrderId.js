import React from 'react';
import { Link } from 'react-router-dom';
//===================================================================================================

const NoOrderId = () => {
  return (
    <div className="container d-flex justify-content-center mt-5">
      <h4>Para registrar un proyecto <Link to='/'>click aqui</Link> y seleccione el área de participación. </h4>
    </div>
  );
};

export default NoOrderId;


