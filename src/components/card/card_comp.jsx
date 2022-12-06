import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';

export const CardComp = (props) => {

const {houses} = props;

  return (
   <>
     <div className='card p-2 border-0 col-md-3'>
     <Link to={`/detail/${houses.id}`}>

      <div className="card-img-top mb-3">
        <img src={houses.image} width="100%" alt="house" className="img-fluid" />
      </div>
      <div className="card-body">
        <div className="top-body d-flex gap-3 fw-bold text-white">
          <span className='bg-success rounded p-1'>{houses.country}</span>
          <span className='bkg-secondary rounded p-1'>{houses.type}</span>
        </div>
        <h5 className='fw-bold py-2 text-dark'>{houses.address}</h5>
        <div className="house-details d-flex gap-3 mb-3 text-muted">
          <span className='text-center'><FontAwesomeIcon className='me-2' icon="fa-bath"/>{houses.bathrooms}</span>
          <span className='text-center'><FontAwesomeIcon className='me-2' icon="fa-solid fa-bed" />{houses.bedrooms}</span>
          <span className='text-center'><FontAwesomeIcon className='me-2' icon="fa-solid fa-up-right-and-down-left-from-center" />{houses.surface}</span>
        </div>
        <h5 className="price fw-bold color-secondary">{houses.price}</h5>
      </div>
      </Link>

    </div>
   </>
  )
}
