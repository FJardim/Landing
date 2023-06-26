import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import logo from "../../assets/image/EscribaniaD.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="flex justify-center bg-[#323438]">
      <div className="p-6 text-center">
        <Image src={logo} className="inline-block" alt="Logo" />
        <p className="text-white mt-2">Teléfono: 11 4963-7888</p>
        <p className="text-white mt-2">Correo: gerencia@escribaniaduek.com</p>
        <p className="text-white mt-2">
          Dirección: Viamonte 2660, C1056ABR CABA
        </p>
        <div className="flex justify-center space-x-4 text-main mt-2 mb-2">
          <FaFacebook className="text-xl" />
          <FaInstagramSquare className="text-xl" />
        </div>
        <ul className="flex space-x-6">
          <li className="text-white">Nosotros</li>
          <li className="text-white">Especialidades</li>
          <li className="text-white">Servicios</li>
          <li className="text-white">Contacto</li>
        </ul>
        <p className="text-white mt-2">Copyrght © 2023 Escribaniaduek</p>
      </div>
    </div>
  );
};
