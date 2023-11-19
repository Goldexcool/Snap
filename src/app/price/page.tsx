"use client"
import React, { Fragment, useEffect } from 'react'
import Image from 'next/image'
import Price from '../../Data/Price'
import check from '../../Images/bx-check.svg'
import check1 from '../../Images/bx-check-circle.svg'
import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // Animation duration
            offset: 200, // Offset (in pixels) from the top of the page
        });
    }, []);
    return (
        <Fragment>
            <div className='flex items-center justify-center flex-col mb-[5rem]'>
                <h1 className='text-center text-deep-blue lg:text-[44px] text-[30px]'>Price: Just right for you </h1>
                <hr className='w-[60px] rounded-full h-2 bg-first-color'/>
            </div>
            <section className='flex flex-col md:flex-row justify-center max-w-full items-center px-10' data-aos="zoom-in-down">
                <div className='grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-3  flex-col md:flex-row justify-between w-full gap-3   '>
                    {
                        Price.map((price: any, index: any) => (
                            <div key={index} className='flex flex-col justify-center items-center mx-auto h-full gap-5 border-2 border-first-color p-3'>
                                <div className='flex flex-col gap-5'>
                                    <h1 className='text-deep-blue text-[30px]'>
                                        {price.title}
                                    </h1>
                                    <h2 className='text-deep-blue text-[20px]'>
                                        {price.header}
                                    </h2>
                                    <button className='text-deep-blue border-2 px-4 py-3 border-first-color text-[20px] rounded-full hover:bg-first-color hover:text-white transition-3'>
                                        {price.btn}
                                    </button>
                                    <h3 className='text-deep-blue text-center text-[15px]'>
                                        {price.addInfo}
                                    </h3>
                                    <hr className='w-full items-center flex text-center' />
                                    <div className='flex flex-col gap-3'>
                                        <h1 className='text-deep-blue text-[17px]'>{price.supportHeader}</h1>
                                        <div className='flex gap-6'>
                                            <Image src={price.image01} alt='' width={20} height={20} />
                                            <div>
                                                <h2>{price.info1}</h2>
                                            </div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <Image src={price.image01} alt='' width={20} height={20} />
                                            <div>
                                                <h2>{price.info2}</h2>
                                            </div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <Image src={price.image01} alt='' width={20} height={20} />
                                            <div>
                                                <h2>{price.info3}</h2>
                                            </div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <Image src={price.image01} alt='' width={20} height={20} />
                                            <div>
                                                <h2>{price.info4}</h2>
                                            </div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <Image src={price.image01} alt='' width={20} height={20} />
                                            <div>
                                                <h2>{price.info5}</h2>
                                            </div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <Image src={price.image01} alt='' width={20} height={20} />
                                            <div>
                                                <h2>{price.info6}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </Fragment>

    )
}
export default Page;