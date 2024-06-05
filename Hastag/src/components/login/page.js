import React from 'react';
import { Card, Input, Button, CardHeader, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";

const CardComponent = () => {
  return (
    <Card className="w-[450px] h-auto mb-8 relative bg-black border-1 border-gray-500">
      <CardHeader className="flex gap-3 items-center">
        <h1 className='text-white font-bold text-6xl'>#</h1>
        <div>
          <p className="text-2xl font-bold text-white">LOGIN</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <Input className='m-3 w-auto' id='email' type="email" label="Email" />
        <Input className='m-3 w-auto' type="password" id='password' label="Password" />
        <Button radius="full" className="w-auto bg-gradient-to-tr from-blue-800 to-black-900 border-1 border-white text-white shadow-lg">
          Login
        </Button>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-center">
        
      <p className='text-white'>Don't have an account? <a href="/register" className='text-blue-500'>Sign up</a></p>

      </CardFooter>
    </Card>
  );
}

export default CardComponent;
