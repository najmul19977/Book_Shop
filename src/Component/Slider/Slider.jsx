import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/img/book1.jpg';
import img2 from '../../assets/img/book2.jpg';
import img3 from '../../assets/img/book3.jpg';
import img4 from '../../assets/img/book4.jpg';
import 'swiper/css';

const Slider = () => {
    return (
        
       <div>
        <div>
            <h1 className='text-center  text-blue-600 text-5xl mt-16 mb-16 font-serif '>Our Popular Books</h1>
        </div>
         <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
            <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
        </SwiperSlide>
       
      </Swiper>
       </div>
    );
};

export default Slider;