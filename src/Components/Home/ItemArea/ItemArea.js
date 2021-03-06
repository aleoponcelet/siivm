import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'
//===================================================

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ItemArea = ({ service }) => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <animated.div
      className="col-md-3 text-center services-card p-4 justify-content-center"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}>
        <Link to={'service/' + service._id}>
          {
                service.imagen ? <img style={{ height: '50px' }} src={`data:image/png;base64,${service.imagen.img}`} alt="icono area"/>
                :
                <img style={{ height: '50px' }} src={service.img} alt='' />
                
          }
          <h5 className='mt-3 mb-3' style={{fontSize:'20px', fontWeight:'600'}}>{service.titulo}</h5>
          <p className='text-secondary'>{service.descripcion}</p>
        </Link>
    </animated.div>
  );
};

export default ItemArea;
