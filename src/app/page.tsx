// "use client"
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Preloader from '@/Components/Preloader';
import Hero from '../Components/Hero';
import Services from '../Components/Services';
import Channels from '@/Components/Channels';

const Page = () => {
  // const [loading, setLoading] = useState(true); // Set initial loading state to true

  // Simulate a delay to showcase the preloader
  // useEffect(() => {
  //   const delay = setTimeout(() => {
  //     setLoading(false); // Set loading state to false after 500ms
  //   }, 500); 
  //   return () => clearTimeout(delay);
  // }, []);

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
