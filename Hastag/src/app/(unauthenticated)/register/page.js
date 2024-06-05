'use client'
import React from 'react';
import { Image } from '@nextui-org/react';
import NavBar from '@/components/navbar/page';
import Register from '@/components/signin/page';

export default function Reg() {
  return (
    <>
      <div className="bg-black min-h-screen flex flex-col">
        <NavBar />

        <div className="flex justify-center items-center flex-grow space-x-[190px] mt-0 border-white w-full">
          <Image
            isBlurred
            isZoomed
            width={300}
            height={180}
            src="sign.png"
            alt="NextUI Album Cover"
            className="mt-none bg-white"
          />
          <Register />
        </div>
      </div>
    </>
  );
}
