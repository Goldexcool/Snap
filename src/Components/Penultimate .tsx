import React from 'react'

const Penultimate = () => {
  return (
    <section className="relative  mt-[5rem] mb-[5rem] overflow-hidden">
      <div className="relative z-10 p-8 left-5 text-deep-blue flex items-center justify-center flex-col">
        <h1 className="text-[40px] md:text-[70px] mb-2"> 24/7 Outsourcing For</h1>
        <h2 className="text-[45px] md:text-[60px] md:ml-4 mb-4">Affordable Team Scalability.</h2>
        <h3 className="text-center mb-4">
          Let&apos;s chat to see if we&apos;re a great fit!
        </h3>
        <button className='bg-first-color text-white rounded-full px-5 py-4'>How we can help</button>
      </div>
      <div className=" w-[150px] md:w-[200px] absolute top-[-3rem] lg:top-2 right-2 floating-ball2"></div>
      <div className="w-[150px] md:w-[200px] absolute bottom-2 left-2 floating-ball"></div>
    </section>
  )
} 

export default Penultimate