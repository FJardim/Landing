import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from 'react-scroll';
import logo from "../../assets/image/EscribaniaD.png";

export const NavBar = () => {
  return (

      <div className="flex items-center mx-6">
        <Image src={logo} className="w-48 h-20 mt-6" alt="Logo" />
        <ul className="lg:flex ml-4 hidden md:block">
          <li className="mx-4 text-white cursor-pointer">
          <ScrollLink
              to="nosotros"
              smooth={true}
              duration={400}>Nosotros</ScrollLink>
          </li>
          <li className="mx-4 text-white cursor-pointer">
          <ScrollLink
              to="especialidades"
              smooth={true}
              duration={400}>
         Especialidades
         </ScrollLink>
          </li>
          <li className="mx-4 text-white cursor-pointer">
          <ScrollLink
              to="servicios"
              smooth={true}
              duration={400}>
        Servicios
        </ScrollLink>
          </li>
          <li className="mx-4 text-white cursor-pointer">
        <Link href='/documents'>Documento</Link>
          </li>
          <li className="mx-4 text-white cursor-pointer">
          <ScrollLink
              to="contacto"
              smooth={true}
              duration={400}>Contacto</ScrollLink>
          </li>
          <li className="mx-4 text-white cursor-pointer">
          Marketplace Abogados
          </li>
        </ul>
        <button className="hidden md:block text-white mx-8 bg-main hover:text-black px-2 py-1 rounded-2xl">
          Call: +SOY EL NUMERO DE ADRIAN
        </button>
      </div>

  );
};
