import React from 'react';
import check from '../../Images/bx-check-circle.svg'
import Image from 'next/image'
import Resources from '../../Images/hero_2.3c8678ea.jpg'
import amazon from '../../Images/amazon.5f1aba87-removebg-preview.png'
import shopify from '../../Images/shopify.da480c94-removebg-preview.png'
import slack from '../../Images/livechat.c11bb8fb-removebg-preview.png'
import zend from '../../Images/zendesk.069474f8-removebg-preview.png'

const Page = () => {
    return (
        <main className='flex justify-center items-center flex-col gap-5'>
            <section className='flex items-center justify-center max-w-full mt-[5rem] mb-[5rem] flex-col'>
            <div className="flex flex-col items-center mb-[4rem]">
                <p className="text-center text-[44px] text-deep-blue font-[400]"> Our Core Resoures</p>
                <hr className="w-[60px] h-1 bg-first-color border-none rounded-full"/>
            </div>
                <div className='flex lg:flex-row flex-col items-center justify-between w-[1100px] max-w-full'>
                    <div className='flex flex-col gap-[3rem]'>
                        <h1 className='text-[45px] lg:text-left text-center text-deep-blue'>24/7 Outsourcing</h1>
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-3 lg:justify-start justify-center text-deep-blue lg:text-right text-center text-[20px]'>
                                <Image src={check} alt='' width={20} height={20} />
                                <h1>Grow your team without breaking the bank.</h1>
                            </div>
                            <div className='flex lg:justify-start justify-center gap-3 lg:text-right text-center text-deep-blue text-[20px]'>
                                <Image src={check} alt='' width={20} height={20} />
                                <h1 className='lg:text-left text-center'>Quality talents that are passionate about your product and brand.</h1>
                            </div>
                            <div className='flex gap-3 lg:justify-start justify-center text-deep-blue text-[20px]'>
                                <Image src={check} alt='' width={20} height={20} />
                                <h1  className='lg:text-left text-center'>Metrics and tools that ensure maximum efficiency.</h1>
                            </div>
                        </div>
                        <div className='flex lg:justify-start justify-center'>
                        <button className='px-6 py-4 bg-first-color flex justify-center lg:justify-start text-white rounded-md w-1/2'>Build Your Team Today</button>
                        </div>
                        <p className='text-[25px] lg:text-left text-center text-deep-blue'>Free consultation. No contract.</p>
                    </div>
                    <div className='flex lg:justify-items-start lg:w-[500px] w-5/6 justify-center '>
                        <Image src={Resources} alt='' width={600} height={800} className='lg:w-[500px] w-5/6 height-[600px]' />
                    </div>
                </div>
            </section>
            <div className='mt-[5rem] flex justify-between items-center flex-col max-w-full mb-[4rem]'>
                    <h1 className='text-[20px] text-deep-blue'>SOME OF THE TOOLS WE SUPPORT</h1>
                    <div className='flex flex-wrap justify-center gap-4 lg:gap-12 w-full bg-transparent'>
                        <Image src={amazon} alt='' width={200} height={200} className='bg-transperent  w-1/4'/>
                        <Image src={shopify} alt='' width={200} height={200} className='bg-transperent  w-1/4' />
                        <Image src={slack} alt='' width={200} height={200} className='bg-transperent w-1/4' />
                        <Image src={zend} alt='' width={200} height={200} className='bg-transperent   w-1/4' />
                        <Image src={zend} alt='' width={200} height={200} className='bg-transperent  w-1/4' />
                    </div>
                </div>
        </main>
    );
}
export default Page;
