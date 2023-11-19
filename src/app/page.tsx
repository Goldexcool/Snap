"use client"
import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Preloader from '@/Components/Preloader';
import Hero from '../Components/Hero';
import Services from '../Components/Services';
import Channels from '@/Components/Channels';
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
    <>
      {/* {loading && <Preloader />} */}
      <main>
        <Hero />
        <Services />
        <Channels />
      </main>
    </>
  );
}

export default Page;
