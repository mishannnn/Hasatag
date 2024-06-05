'use client'

import React from 'react';
import Card from '../components/login/page'; // Adjust the import path based on the actual location of your card.js file
import { Image } from '@nextui-org/react';
import NavBar from '@/components/navbar/page';


const login = () => {

  
  return (
      <div className='bg-zinc-950 min-h-screen'>
        <NavBar/>
        <div className='flex justify-center space-x-40 mt-8 mb-4'>
          <Image
            isBlurred
            isZoomed
            width={340}
            src="bg.png"
            alt="bg image"
            className="m-5 h-60 w-64"
          />
          <Card/>
        </div>
      </div>
  


  );
}
export default login