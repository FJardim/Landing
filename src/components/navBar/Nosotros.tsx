import React from 'react';
import Image from 'next/image';
import imagen from '@/components/assets/image/image 8.png';

export default function Nosotros({ title, subtitle, parraph }) {
  return (
    <div className="container bg-white w-full h-full flex flex-wrap">
      <div className="w-full md:w-1/2 p-10">
        <div className="mb-8">
          <h1 className="text-5xl font-bold">{title}</h1>
          <h1 className="text-xl font-medium">{subtitle}</h1>
        </div>
        <p className="text-xl font-medium">{parraph}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mt-4">
          Contáctanos
        </button>
      </div>
      <div className="w-full md:w-1/2 p-10 flex justify-center items-center">
        <Image src={imagen} alt="imagen" width={550} height={400} />
      </div>
    </div>
  );
}
