import React, { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import SingleBook from '../SingleBook/SingleBook';
import { Navigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Book = () => {
    const { books } = useLoaderData();
    const navigate = useNavigate();

    useEffect(() =>{
        Aos.init({duration:2000});
    },[])
    //console.log(books);
    return (
        <div className='mt-20'>
            <div data-aos="fade-up">
            <h2 className='text-center text-2xl font-bold bg-primary text-white pt-8 pb-8 uppercase'>Our All Books</h2>
            </div>
            <div className= 'md:grid grid-cols-4 mx-auto container gap-5 mt-5 mb-5 '>
                {
                    books.map(book => <SingleBook
                        key={book.isbn13}
                        book={book}
                    ></SingleBook>)
                }
            </div>
            <div>
            <button className='btn btn-primary ml-14 mt-10 mb-10' data-aos="fade-up" onClick={() => navigate('/')}>Go TO Home</button>
            </div>
        </div>
    );
};

export default Book;