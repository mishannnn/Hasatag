"use client"
import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import Dropdown from '../dropdown/page';

const NavBar = () => {
  return (
    
    <Navbar className='relative bg-black border-1 border-white'>
      <NavbarBrand>
      <a href='/'>
      <h1 className='text-white text-3xl font-bold font-serif'>Has Tag</h1>
            
             </a>
      </NavbarBrand>
      <NavbarContent justify="end">
        <Dropdown/>
      </NavbarContent>
    </Navbar>
  )
}

export default NavBar