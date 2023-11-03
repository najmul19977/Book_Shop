import React from 'react';
import img1 from '../../assets/img/person1.jpg';
import img2 from '../../assets/img/person2.jpg';


const Testimonier = () => {
    return (
        <div className='mt-20 mb-20'>
            <h2 className='text-center text-5xl uppercase font-serif mt-5 mb-5 text-primary'data-aos="fade-down">Testimonial</h2>
            <p className='text-center text-xl mb-5'>What others say about us</p>
            <div className='md:flex  gap-4 container px-9 mx-auto'>
                <div className="card w-80 mx-auto bg-base-100 shadow-xl  hover:bg-gray-500 hover:blur-none" data-aos="fade-up-right">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Pitter Son</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae placeat hic omnis cum. Blanditiis fugit ab, nisi distinctio officia beatae libero sit veniam, inventore vel perspiciatis eaque iusto totam eligendi.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Get In Touch</button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 mx-auto bg-base-100 shadow-xl  hover:bg-gray-500 hover:blur-none" data-aos="fade-down">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Devide Knle</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla placeat numquam similique suscipit eum facilis debitis, maiores sapiente perspiciatis magnam odio dicta voluptatibus amet quis laboriosam saepe inventore exercitationem facere!</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Get In Touch</button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 mx-auto bg-base-100 shadow-xl  hover:bg-gray-500  hover:blur-none" data-aos="fade-up-left">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shai Dhin</h2>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veniam provident. Mollitia reiciendis quo eos dicta nam aliquid, optio ab earum quas sit iure ex repellendus totam ipsam quibusdam fuga.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Get In Touch</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Testimonier;