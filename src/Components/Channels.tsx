import React from 'react'
import Image from 'next/image'
import contact from '../Data/Channels'

const Channels = () => {
    return (
        <section className='flex justify-center items-center md:px-[5rem] lg:px-[7rem] flex-col mt-[5rem] mb-[5rem]' >
            <h1 className='text-[34px] text-deep-blue mb-3'>Supported Channels</h1>
            <h2 className='text-center text-[18px]  md:text-[25px] text-deep-blue mb-4 '>SnappyCX integrates with your business support platforms and channels.</h2>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:justify-between w-full">
                {contact.map((item: any, index: any) => (
                    <div key={index} className="flex items-center justify-center max-w-full">
                        <div className="flex items-center justify-between w-full gap-4 mt-[3rem]">
                            <div className="flex items-center justify-center flex-col gap-2">
                                <div className='p-6 bg-deep-blue rounded-full'>
                                    <Image src={item.icon} alt="" width={30} height={30} />
                                </div>
                                <div className="flex flex-col items-center text-main-color-black">
                                    <h1 className="text-[25px] text-deep-blue ">{item.title}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>
        </section>
    )
}

export default Channels
