import React from 'react';
import NabSection from '../NabSection/NabSection';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div className=''>
            <NabSection></NabSection>
            
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;