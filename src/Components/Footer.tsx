import React from 'react';
import Image from 'next/image'
import Socials from '../Data/Socials'

const Footer = () => {
    return (
        <footer className='flex items-center max-w-[85%] rounded-xl mb-6 justify-center mx-auto p-12 bg-black text-white mt-[5rem]'>
            <div className='flex flex-wrap items-center justify-between w-[1000px]'>
                <div className='flex  flex-col gap-5'>
                    <h1 className=' text-[27px]'>SnappyCx</h1>
                    <h2 className=' text-[20px]'>We are a team of creatives
                        that <br className='lg:block hidden'/>strive to make a social impact</h2>
                </div>
                <div className='flex gap-7 flex-col'>
                    <ul className='flex flex-wrap gap-3 text-[18px] '>
                        <li className='cursor-pointer'>Solutions</li>
                        <li className='cursor-pointer'>Resources</li>
                        <li className="cursor-pointer">Pricing</li>
                        <li className="cursor-pointer">Career</li>
                        <li className="cursor-pointer">Contact</li>
                    </ul>
                    <div className='flex flex-wrap gap-2'>
                        <p className='text-[23px]'>SOCIALS:</p>
                        <div className='flex-wrap  flex gap-5  items-center'>
                            {
                                Socials.map((social: any, index: any) => (
                                    <div key={index} className='flex gap-1 hover-effect'>
                                        <h1 className='text-[16px]'>{social.name}</h1>
                                        <Image src={social.image01} alt={social.name} width={15} height={15} className='mb-1'/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
