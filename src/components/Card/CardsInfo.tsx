import React from 'react'
export default function CardsInfo({title, text, icon}) {
  return (
   
      <div className="bg-teal-400 p-6 w-80 h-auto rounded-lg shadow-md text-center">
       
          <div className='flex justify-center text-5xl text-white'>
           {icon}
          </div> 
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-white">{text}</p>
      </div>
  )
}
