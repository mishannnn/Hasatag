"use client"
import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import Dropdown from '../dropdown/page';
import Input from '@/components/searchbar/page'
import { Button } from "@nextui-org/react";



const NavBarAF = () => {
  return (
    
    <Navbar className=' w-full mt-0 flex justify-between bg-black border-b border-gray-500 mb-0 fixed'>
      <NavbarBrand>
      <a href='/'>
      <h1 className='text-3xl font-bold text-white shadow-black font-serif'>Has Tag</h1>
             </a>
      </NavbarBrand>
      <NavbarContent justify="end" className='relative left-[550px]'>
        <div className='flex m-8'>
          <Button varient='Shadow' className='mt-6 mr-2 w-44 text-1xl'>Create a tag</Button>
        <Input/>
        <Dropdown/>
        </div>
      </NavbarContent>
    </Navbar>
  )
}

export default NavBarAF