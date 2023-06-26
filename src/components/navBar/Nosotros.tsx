import React from "react";
import Image from "next/image";
import imagen from "@/components/assets/image/image 8.png";

export default function Nosotros({
  title,
  subtitle,
  parraph,
}: {
  title: string;
  subtitle: string;
  parraph: string;
}) {
  return (
    <div className="container bg-white w-full h-full flex flex-wrap">
      <div className="w-full md:w-1/2 lg:p-20 p-10">
        <div className="mb-8">
          <h1 className="lg:text-5xl text-5xl text-center lg:text-justify font-bold">
            {title}
          </h1>
          <h1 className="text-xl text-center lg:text-justify font-medium">
            {subtitle}
          </h1>
        </div>
        <p className="text-xl text-center lg:text-justify font-medium">
          {parraph}
        </p>
        <button className="bg-main hover:text-black text-white font-bold py-2 px-8 rounded mt-4">
          Contáctanos
        </button>
      </div>
      <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
        <div className="bg-main pt-6 pr-6">
          <Image src={imagen} alt="imagen" width={440} height={400} />
        </div>
      </div>
    </div>
  );
}
