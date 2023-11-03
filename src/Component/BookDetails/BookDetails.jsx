import React from 'react';
import './BookDetails.css';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';



const BookDetails = () => {
    const details = useLoaderData();
    const navigate = useNavigate();

    console.log(details);
    const { authors, image, desc, price, title, publisher, year, rating } = details;
    return (
        <div className='container px-4 mx-auto mt-10 mb-10 '>
            <h2 className='text-center uppercase text-2xl text-blue-600 font-bold'>Our Book Details</h2>
            
                <div className='lg:flex md:flex  items-center w-100 mx-auto '>
                    <div className='div1'>
                        <img className='img w-full' src={image} alt="" />
                    </div>
                    <div>


                        <div className="card w-50% bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{title}</h2>
                                <p>{authors}</p>
                                <p>{desc}</p>
                                <p>{publisher}</p>
                                <p>Publish:{year}</p>
                                <p>Price:{price}</p>
                                <p>Rating:{rating}</p>
                                <button className='btn btn-primary'>Add To Card</button>
                            </div>
                        </div>
                    </div>

                </div>

            
            <div className='button mt-10 sm:mx-auto' >
                <button onClick={() =>navigate(-1) } className='btn btn-primary '>GO BACK</button>
            </div>
        </div>



    );
};

export default BookDetails;