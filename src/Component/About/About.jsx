import React, { useEffect } from 'react';

import './About.css';
import Lottie from 'lottie-react';
import lottie from '../../assets/animation.json';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() =>{
        Aos.init({duration:2000});
    },[])
    return (
        <div className=' about md:grid grid-cols-2 mt-20 mb-20 container mx-auto '>
            <div className='ml-5 mr-5' data-aos="fade-right">
                <h2 className='text-primary font-bold text-4xl uppercase mt-4 mb-4'> Our Bookshop Details</h2>
                <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem delectus dolore facere consequatur aliquam quis maxime quibusdam laborum nobis, quasi dicta placeat quisquam, doloremque veniam excepturi animi cupiditate, odit neque?</p>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate quia nihil est, molestiae ab ducimus sit reprehenderit sunt eos doloremque non obcaecati cumque fugiat voluptates aut dolorem magnam tempora atque?</p>
                <button className='btn btn-primary mt-4 mb-4 btn-lg' data-aos="fade-up"><Link to='book'>Visite Bookshop </Link></button>
            </div>
            <div className='img-Section'>
                {/* <img src={lottie} alt="" /> */}
                <div className='anim'><Lottie  animationData={lottie}  /></div>
            </div>
        </div>
    );
};

export default About;