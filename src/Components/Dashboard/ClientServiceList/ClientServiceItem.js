import React from 'react';

const ClientServiceItem = (props) => {
  // Receive props from ClientServiceList Component
  console.log(props.service);
  const { _id, titulo, descripcion, img, estado, image } = props.service;

  return (
    <div className='col-md-6 rounded mb-3'>
      <div className='card h-100'>
        <div className='card-body p-3'>
          <div className='row'>
            <div className='col-md-12 d-flex justify-content-between'>
              <div className='mb-3 mb-md-0'>
                {/* Show image */}

                {image ? <img style={{ height: '50px' }} src={`data:image/png;base64,${image.img}`}/>
                : 
                <img className='img-fluid w-25' src={img} alt={titulo} />
                
                }
                
              </div>
              <div>
                <div className='mb-0'>
                  <button
                      className={
                      estado == 'Pendiente'
                        ? 'client-status-btn btn btn-sm btn-danger'
                        : estado == 'Aceptado'
                        ? 'client-status-btn btn btn-sm btn-success'
                        : 'client-status-btn btn btn-sm btn-warning'
                    }
                  >
                    {estado}
                  </button>
                </div>
              </div>
            </div>

            <div className='col-md-12'>
              <div className='d-flex justify-content-between mt-2'>
                <div>
                  {/* Show service title */}
                  <h5>{titulo}</h5>
                  <p className='mb-3'>{descripcion}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ClientServiceItem;
