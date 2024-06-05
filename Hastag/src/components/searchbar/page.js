import React from 'react'
import {Input} from "@nextui-org/react";

const sbar = () => {
  return (
    <div className="w-auto flex flex-row flex-wrap gap-4 full mt-1" >
        <Input
          type="search"
          label="🔍Search"
          placeholder=""
          className="max-w-[280px] h-9 mt-5"
        />
    </div>
  )
}

export default sbar