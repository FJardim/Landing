import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import logo from "../../assets/image/EscribaniaD.png";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex justify-center bg-[#323438]">
      <div className="p-6 text-center">
        <Link href="/" className="hover:text-main">
          <Image src={logo} className="inline-block" alt="Logo" />
        </Link>
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
          <li className="text-white">
            <Link href="/#nosotros" className="hover:text-main">
              Nosotros
            </Link>
          </li>
          <li className="text-white">
            <Link href="/#especialidades" className="hover:text-main">
              Especialidades
            </Link>
          </li>
          <li className="text-white">
            <Link href="/#servicios" className="hover:text-main">
              Servicios
            </Link>
          </li>
          <li className="text-white">
            <Link href="/#contacto" className="hover:text-main">
              Contacto
            </Link>
          </li>
        </ul>
        <p className="text-white mt-2">
          Copyrght © 2023{" "}
          <Link href="/" className="hover:text-main">
            Escribaniaduek
          </Link>
        </p>
      </div>
    </div>
  );
};
