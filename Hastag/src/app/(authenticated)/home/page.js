'use client'
import React from 'react';
import NavBarAF from '@/components/navbar_Af_login/page';
import Feed from '@/components/feed/page';


const Home = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col relative">
      <NavBarAF />
      
      <div className="fixed top-0 left-0 h-screen flex">
        <div className='flex-col flex'>
        <div className='w-[270px] h-[450px] bg-black border-r border-gray-500 mt-[70px] ml-1 rounded-3xl text-center shadow-sm shadow-gray-500'>
          <div className="border-b border-gray-300 m-2"></div>
          <h1 className='text-white mt-1 font-bold text-2xl bg-gray-500'>Trending</h1>
          <ul className="text-white text-xl items-center flex flex-col space-y-3 mt-4 ">
    <li className="w-full text-center hover:underline cursor-pointer">#Football</li>
    <li className="w-full text-center hover:underline cursor-pointer">#China</li>
    <li className="w-full text-center hover:underline cursor-pointer">#Harrypotter</li>
    <li className="w-full text-center hover:underline cursor-pointer">#MMA</li>
    <li className="w-full text-center hover:underline cursor-pointer">#Chess</li>
    <li className="w-full text-center hover:underline cursor-pointer">#America</li>
    <li className="w-full text-center hover:underline cursor-pointer">#Cricket</li>
  </ul>
        </div>
<div className='bg-transparent border-1 border-gray-500 w-[250px] h-40 m-4 rounded-lg'>
  <h1 className='text-center font-bold text-xl text-white m-2 bg-gray-500'>You might like</h1>
</div>
        </div>

      <Feed/>
        
      <div className='bg-black border-l border-gray-500 pt-24 flex flex-col text-2xl text-white fixed top-0 right-0 h-screen w-32 object-cover'>
   <img src='./home.png' className='w-14 h-14 border-2 hover:scale-110 border-white rounded-full bg-white ml-2 mt-0 mb-7'></img> 
  <img src='./notification.png' className='w-14 h-14 border-2 hover:scale-110 border-white rounded-full ml-2 bg-white mt-5 mb-7'></img>
  <img src='./chat.png' className='w-14 h-14 border-2 hover:scale-110 border-white rounded-full bg-white mt-5 ml-2 mb-7'></img>
  <img src='./profile-user.png' className='w-14 h-14 hover:scale-110 border-2 border-white rounded-full bg-white ml-2 mt-5 mb-7'></img>
  <img src='./plus.png' className='w-14 h-14 border-2 hover:scale-110 border-white rounded-full bg-white mt-5 ml-2 mb-7'></img>
  <img src='./settings.png' className='w-14 h-14 border-2 hover:scale-110 border-white rounded-full bg-white mt-5 ml-2 mb-7'></img>
</div>


      </div>
    </div>
  );
};

export default Home;
