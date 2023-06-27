import Image from "next/image";
import React from "react";
import logo from "../../assets/image/EscribaniaD.png";

export const NavBar = () => {
  return (
    <div className="flex items-center mx-6">
      <Image src={logo} className="w-48 h-20 mt-6" alt="Logo" />
      <ul className="lg:flex ml-4 hidden md:block mt-4">
        <li className="mx-4 text-white">Nosotros</li>
        <li className="mx-4 text-white">Especialidades</li>
        <li className="mx-4 text-white">Servicios</li>
        <li className="mx-4 text-white">Documento</li>
        <li className="mx-4 text-white">Contacto</li>
        <li className="mx-4 text-white">Marketplace Abogados</li>
      </ul>
      <button className="hidden md:block mt-6 text-white mx-8 bg-main hover:text-black px-2 py-1 rounded-2xl">
        Call: +SOY EL NUMERO DE ADRIAN
      </button>
    </div>
  );
};
