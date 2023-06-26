import React from 'react';
import { HiOutlinePencilAlt }  from 'react-icons/hi'; 
import { IconContext } from 'react-icons';

const CardInfo = ({ title, text }) => {
  return (
    <div className="bg-teal-400 p-6 w-80 h-auto rounded-lg shadow-md text-center">
      <IconContext.Provider value={{ color: 'white', size: '4em' }}>
        <div className='flex justify-center'>
         <HiOutlinePencilAlt/>
        </div>
      </IconContext.Provider>
      <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
      <p className="text-white">{text}</p>
    </div>
  );
};

export default CardInfo;
