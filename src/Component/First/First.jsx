import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import SingleImg from '../SingleImg/SingleImg';
import Testimonier from '../Testimonier/Testimonier';
import Author from '../Author/Author';
import Featured from '../../Featured/Featured';
import NewSection from '../NewSection/NewSection';





const First = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Slider></Slider>
            <SingleImg></SingleImg>
            
            <Author></Author>
            <Featured></Featured>
            <NewSection></NewSection>
            <Testimonier></Testimonier>
        </div>
    );
};

export default First;
