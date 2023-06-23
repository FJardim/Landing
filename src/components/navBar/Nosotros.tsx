import React from 'react'
import imagen from "@/components/assets/image/image 8.png"
import rectangule from "@/components/assets/image/Rectangle 1.png"
import Image from 'next/image'
export default function Nosotros({title, subtitle, parraph}) {
  return (
 <div className='container bg-white w-full h-full flex'>
    <div className='w-1/2 p-20'>
        <div className='mb-8'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <h1 className='text-xl font-medium'>{subtitle}</h1>
        </div>
        <h1 className='text-xl font-medium'>{parraph}</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mt-4">
  Contactanos
</button>
    </div>
<div className='w-1/2 p-20 flex'>
    <Image src={imagen} alt="imagen" width={550} /> 
</div>
 </div>
  )
}
