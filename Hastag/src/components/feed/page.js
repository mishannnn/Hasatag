import React from 'react';
import { Tabs, Tab, Card, CardBody, Button } from "@nextui-org/react";
import Des from '../descriptionbox/page';
import Avat from '../avatar/page';
import Fcontent from '../(Globalcontents)/following/page';
import Global from '../(Globalcontents)/global/page';
import Nepal from '../(Globalcontents)/Nepal/page';
import { CiImageOn, CiLocationOn, CiShoppingTag } from "react-icons/ci";
import { FaCamera } from "react-icons/fa";

const Feed = () => {
  let tabs = [
    {
      id: "Global",
      label: "Global",
      content: <Global/>
    },
    {
      id: "Following",
      label: "Following",
      content: <Fcontent/>
    },
    {
      id: "Nepal",
      label: "Nepal",
      content: <Nepal/>
    }
  ];

  return (
    <div className="flex flex-col mt-20 w-[1100px] fixed left-72">
      <Tabs aria-label="Dynamic tabs" items={tabs} className='fixed ml-4'>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card className="bg-transparent text-white shadow-lg border-gray-500 border-1 ml-4 mt-10 h-screen">
              <CardBody className="scrollbar-hide">
                <div className='bg-transparent h-fit w-full'>
                <div className='m-6'><Avat/><Des/></div>

                <div className='flex ml-14 w-fit'>
                <FaCamera  className='m-2 h-5 w-5 hover:bg-gray-500 border-b'/>
                <CiImageOn  className='m-2 h-5 w-5'/>
                <CiLocationOn  className='m-2 h-5 w-5'/>
                <CiShoppingTag className='m-2 h-6 w-6'/>
              </div>



                <div className="flex justify-end">
                  <Button className='mb-6 mr-28 w-36' color="primary" variant="shadow">Post</Button>
                </div>
                <hr/></div><br/>
                {item.content}
                
              </CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
};

export default Feed;
