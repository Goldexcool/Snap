"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../Images/logo-snappy.c2bc0737.png';
import bar from '../Images/Icons/bar.svg';
import ex from '../Images/Icons/ex.svg';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMenuOpen(false); // Initial state when the component mounts
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <main>
            <header className='flex items-center justify-center max-w-full p-3'>
                <nav className={`flex items-center justify-between w-[1100px] ${menuOpen ? 'menu-open' : ''}`}>
                    <Image src={logo} alt='logo' width={250} height={200} />

                    <ul className={`items-center gap-6 text-deep-blue text-[20px] lg:flex hidden ${menuOpen ? 'hidden' : ''}`}>
                        <Link href='/'>
                            <li>Solutions</li>
                        </Link>
                        <Link href='/resources'>
                            <li>Resources</li>
                        </Link>
                        <Link href='/price'>
                            <li>Pricing</li>
                        </Link>
                        <Link href='/career'>
                            <li>Career</li>
                        </Link>
                    </ul>

                    <button className='px-5 py-3 border-2 border-first-color text-first-color rounded-full lg:flex hidden'>
                        Contact Us
                    </button>

                    <div className="lg:hidden inline-flex" onClick={toggleMenu}>
                        <Image src={menuOpen ? ex : bar} alt='' width={30} height={30} className={`open ${menuOpen ? 'rotate-45' : ''}`} />
                    </div>
                </nav>
            </header>


            <div
                className={`hamburger-menu fixed right-0 w-full bg-white transform transition-transform ease-in-out duration-300 z-[1000000000] ${menuOpen ? 'menu-open' : ''
                    }`}
            >
                <div className='close-button p-4 cursor-pointer absolute top-0 right-0' onClick={toggleMenu}>
                    <Image src={ex} alt='' className='text-gray-800 text-3xl' />
                </div>
                <div className='menu flex flex-col gap-10 justify-start items-start p-6 h-screen'>
                    <ul className='text-[20px] text-start mt-10 '>
                        <Link href='/' className='text-deep-blue text-[40px] mb-8' onClick={toggleMenu}>
                            <li>Solutions</li>
                        </Link>
                        <Link href='/resources'className='text-deep-blue text-[40px] mb-8' onClick={toggleMenu}>
                            <li>Resources</li>
                        </Link>
                        <Link href='/price' className='text-deep-blue text-[40px] mb-8' onClick={toggleMenu}>
                            <li>Pricing</li>
                        </Link>
                        <Link href='/career' className='text-deep-blue text-[40px] mb-8' onClick={toggleMenu}>
                            <li>Career</li>
                        </Link>
                        <button className='px-5 py-3 border-2 border-deep-blue text-deep-blue rounded-md lg:flex '>
                            Contact Us
                        </button>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default Navbar;