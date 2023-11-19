"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import cs from '../../Images/cs-1.7427d585.jpg'
import dd from '../../Images/ddd.jpg'

const Page = () => {
    const [count, setCount] = useState(0)
    const [percent, setPercent] = useState(0)

    useEffect(() => {
        if (count < 1000) {
            setTimeout(() => {
                setCount(count + 1)
            }, 10)
        }
    }, [count]);

    useEffect(() => {
        if (percent < 99) {
            setTimeout(() => {
                setPercent(percent + 1)
            }, 100)
        }
    }, [percent]);

    return (
        <main className='flex justify-center items-center flex-col'>
            <div className='flex items-center justify-center flex-col '>
                <h1 className='text-deep-blue text-[55px]'>Career</h1>
                <hr className='w-[60px] h-1 bg-first-color border-none rounded-full' />
            </div>

            <section className='flex justify-center items-center max-w-full mt-[5rem] mb-[5rem]'>
                <div className='flex lg:flex-row    max-w-full flex-col items-center justify-between w-[1000px] '>
                    <div className='flex flex-col lg:justify-start justify-center'>
                        <Image src={cs} alt='' className=' lg:w-[500px] w-[300px] lg:h-[650px] border-2 p-6 rounded-[10px] text-deep-blue' />
                        <div className='flex-row lg:justify-start justify-center flex '>
                            <p className=' flex-row lg:justify-start justify-center  border-[2px]  p-3 border-first-color flex items-center gap-3 text-[20px] rounded-md mt-2'><span className='text-[35px] text-first-color'>{count}+</span> vetted agents pipeline </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6  lg:w-1/2 p-5 py-[3rem] md:py-[6rem] '>
                        <h1 className='text-deep-blue text-[25px] md:text-[40px] lg:text-left text-center'>Never worry again about Quality Support</h1>
                        <h2 className='text-deep-blue text-[19px] md:text-[27px] lg:text-left text-center'>We are committed to providing the highest level of service to your customers. Our agents are trained to deliver prompt, courteous, and knowledgeable support, ensuring that every interaction leaves a positive impression while meeting all KPIs.</h2>
                        <div className="flex lg:justify-start justify-center ">
                            <button className='w-1/2 px-6 py-4 bg-first-color text-white rounded-full'>Start Trial</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex justify-center items-center max-w-full md:mt-[5rem] mb-[5rem]'>
                <div className=' w-[1000px]  max-w-full grid gtrid-cols-1  lg:grid-cols-2  lg:flex-row flex-col items-center justify-between '>

                    <div className='flex flex-col gap-6   justify-center items-start p-5  '>
                        <p className='text-deep-blue text-[43px]  w-full lg:block flex justify-center lg:text-left text-center'>Onboard within a week!</p>
                        <h2 className='text-deep-blue text-[25px]  lg:text-left text-center'>Adaptive support talents that can quickly integrate with your team within the first week. Whether you need support for seasonal spikes or require round-the-clock assistance, our team can scale up or down as required to meet your demands.</h2>
                        <p className='lg:w-fit w-full   lg:text-left text-center justify-center  flex items-center gap-3 text-[20px] rounded-md mt-2'><span className='text-[33px] text-first-color'>{percent}%</span> customer retention </p>
                        <div className=" lg:block flex justify-center items-center w-full">
                            <button className='w-1/2 px-6 py-4 bg-first-color text-white rounded-full'>Learn More</button>
                        </div>
                    </div>
                    <div className='lg:block flex justify-center items-center flex-col'>
                        <Image src={dd} alt='' className='lg:w-fit  w-[70%]  md:object-cover md:h-[600px] text-deep-blue' />

                    </div>
                </div>
            </section>
        </main>

    );
}

export default Page;
