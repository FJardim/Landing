import React from "react";
import Image from "next/image";
import imagen from "@/components/assets/image/image 9.png";
import InfoBox from "./InfoBox";

export default function Especialidades({ title }: { title: string }) {
  const textData = [
    {
      title: "Consultas y asesoramiento",
      content:
        "Brindamos un servicio de excelencia, enfocándonos en las necesidades del cliente.",
    },
    {
      title: "Poderes",
      content:
        "Un poder notarial es un instrumento público por el que una persona, humana o jurídica, designa a otra para que generalmente la represente y le da facultades para que ésta pueda actuar en su nombre y en representación en determinados actos jurídicos.",
    },
    {
      title: "Autorizaciones",
      content:
        "Es un instrumento mediante el cual una persona autoriza a otra para una acción especifica. Puede ser de viaje, de conducir, etc",
    },
  ];
  const textData2 = [
    {
      title: "Contrato de locación",
      content:
        "El contrato delocación es un contrato por el cual existe una relación entre dos partes, mediante la cual se obligan de manera reciproca y por un tiempo determinado.",
    },
    {
      title: "Certificación de firmas",
      content:
        "Boletos de compraventa, locaciones, préstamos, transferencias de vehículos, alquileres, etc.",
    },
    {
      title: "Boletos de Compra Venta",
      content:
        "Es un contrato previo a la Escritura Traslativa de Dominio, que obliga al vendedor a transferir la propiedad prometida en venta y al comprador a pagar el precio pactado por la misma.",
    },
  ];

  return (
    <div className="container bg-white w-full h-full flex flex-wrap p-4 space-y-6">
      <div className="w-full md:w-1/2 lg:p-6 md:px-8">
        <h1 className="lg:text-6xl text-4xl font-bold lg:mb-20 mb-8 mt-6 ">
          {title}
        </h1>
        <div className="bg-main pb-6 pl-6 ">
          <Image src={imagen} alt="imagen" width={480} height={400} />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-wrap lg:p-6 ">
        <div className="w-full md:w-1/2">
          {textData.map((item, index) => (
            <div key={index} className="p-2 bg-white ">
              <InfoBox title={item.title} content={item.content} />
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2">
          {textData2.map((item, index) => (
            <div key={index} className="p-2 bg-white ">
              <InfoBox title={item.title} content={item.content} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
