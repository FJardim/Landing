import React from "react";
import { GiPadlock } from "react-icons/gi";
import seguridad from "../assets/image/seguridad.png";
import Image from "next/image";

export default function PagoSeguro() {
  return (
    <div className="lg:w-1/2 bg-white lg:h-3/6 rounded-lg p-4">
      <div className="flex">
        <GiPadlock className="mt-1 ml-4" />
        <p className="font-bold ml-2">Pago seguro</p>
      </div>
      <div className="p-2 text-gray-700 ">
        <p>Paga con total seguridad.</p>
        <p>
          Datos <b>encriptados</b>. Descargas protegidas por SSL.
        </p>
        <div className="flex justify-center pt-4">
          <Image src={seguridad} alt="certificado" width={200} height={100} />
        </div>
      </div>
    </div>
  );
}
