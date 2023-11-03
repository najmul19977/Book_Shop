import React from 'react';
import './SingleBooks.css';
import { Link, useNavigate } from 'react-router-dom';

const SingleBook = ({ book }) => {
  const { title, image, price, subtitle, isbn13 } = book;
  const navigate = useNavigate();
  
  return (
    <div className='mt-5 mb-5 d-flex justify-center container mx-auto'>
      <div className="card w-80 bg-base-100 shadow-xl image-full">
        <figure><img className='object-contain w-full mx-auto' src={image} alt="book cover" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{subtitle.substring(0, 45)}...</p>
          <p className='text-center'>Price {price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link to={`/book/${isbn13}`}>View Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
