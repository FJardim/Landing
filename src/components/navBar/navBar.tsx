import Image from "next/image";
import React from "react";
import logo from "../../assets/image/EscribaniaD.png";
import portada from "../../assets/image/imgED.jpg";
import { url } from "inspector";

export const NavBar = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${portada.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "700px",
      }}
    >
      <div className="flex items-center mx-6">
        <Image src={logo} className="w-48 h-20 mt-6" alt="Logo" />
        <ul className="flex ml-4">
          <li className="mx-4 text-white">Nosotros</li>
          <li className="mx-4 text-white">Especialidades</li>
          <li className="mx-4 text-white">Servicios</li>
          <li className="mx-4 text-white">Documento</li>
          <li className="mx-4 text-white">Contacto</li>
          <li className="mx-4 text-white">Marketplace Abogados</li>
        </ul>
        <button className="hidden md:block text-white mx-8 bg-main px-2 py-1 rounded-2xl">
          Call: +SOY EL NUMERO DE ADRIAN
        </button>
      </div>
      <div className="flex">
        <div className="p-24 m-8 w-10/12">
          <h1 className="m-auto text-white text-5xl font-bold">
            Escribania Duek
          </h1>
          <p className="text-white text-2xl font-bold mt-8 mb-8">
            Nos respaldan mas de 40 años de trayectoria brindando servicios
            notariales-legales, destacándose como un equipo serio y comprometido
            con sus clientes.
          </p>
          <button className="text-white bg-main px-8 py-2 rounded-xl">
            CONTACTANOS
          </button>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};
