"use client"
import React from 'react'
import dataservice from '../Data/Services'
import Image from 'next/image'
const Services = () => {
    return (
        <div className='mt-[8rem] px-7'>
            <div className="flex flex-col items-center mb-[4rem]">
                <p className="text-center text-[2rem] md:text-[3rem] text-deep-blue font-[400]  "> Our Core Services</p>
                <hr className="w-[40px] h-1 bg-first-color border-none rounded-full"/>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 ">
                {dataservice.map((serve: any, i: any) => (
                    <div
                        key={i}
                        className="border border-gray-light flex justify-center items-center p-6 sm:p-4 md:p-6 lg:p-8  cursor-pointer hover:border-0 hover:shadow-xl hover:translate-y-[-10px] transition-all "
                    >
                        <div className="flex flex-col gap-4">
                            <div className="bg-main-blue mx-auto flex justify-center items-center w-fit p-6 rounded-[0.5rem]">
                                <Image
                                    src={serve.image01}
                                    width={50}
                                    height={50}
                                    alt={serve.image01}
                                />
                            </div>
                            <h1 className="text-center text-[1.2rem] md:text-[1.5rem]  text-main-black">
                                {serve.header}
                            </h1>
                            <p className="text-center text-main-black text-[0.75rem] md:text-[1rem]">
                                {serve.about}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services