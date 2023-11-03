import React from 'react';
import './SingleAuthor.css';

const SingleAuthor = ({item}) => {
    const {name,image,publish} =item;
    return (
        <div data-aos="fade-right">
            <div className='img-fluid '>
                <img className='zoom w-52 rounded-full mx-auto mb-5 mt-5 ' src={image} alt="" />
            </div>
            <div className='text-center text-xl font-serif'>
                <h2 className='mb-2'>Name:{name}</h2>
                <p>Publish:{publish}</p>

            </div>
            
        </div>
    );
};

export default SingleAuthor;