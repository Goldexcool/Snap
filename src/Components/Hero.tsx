import React from 'react';
import 'animate.css';

const Hero = () => {
    return (
        <section className='px-8 mt-5 mb-10'>
            <div className='md:px-8 flex items-center justify-center flex-col gap-4 '>
                <h1 className='text-[30px] md:text-[40px] lg:text-[57px] text-black text-center '>We Go Beyond Traditional Outsourcing, Offering Solutions That Empower Your Business To Thrive In The Digital Landscape. </h1>
                <button className='bg-first-color text-white rounded-full px-5 py-4 animate__shakeY'>How we can help</button>
            </div>
        </section>
    );
}

export default Hero;
