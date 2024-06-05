"use client"

import React from 'react'
import {Avatar,Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";


const drop = () => {
  return (
    <Dropdown >
      <DropdownTrigger>
          <Avatar  className="m-6"  isBordered color="secondary" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        
      </DropdownTrigger>
      <DropdownMenu aria-label="Example with disabled actions">
        <DropdownItem key="copy">About</DropdownItem>
        <DropdownItem key="edit">Help</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          FAQs
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default drop