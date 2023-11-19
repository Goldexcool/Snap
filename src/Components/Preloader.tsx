import React from 'react';

const Preloader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="border-t-4 border-first-color rounded-full animate-spin h-12 w-12 border-solid"></div>
    </div>
  );
}

export default Preloader;