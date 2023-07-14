import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/image/EscribaniaD.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
export const NavBar = () => {
  return (
    <div className="flex items-center mx-2">
      <Link href={"/"}>
        <Image src={logo} className="w-48 h-20 mt-4 mb-4" alt="Logo" />
      </Link>
      <ul className="lg:flex ml-4 hidden md:block m-auto">
        <li className="mx-4 text-white cursor-pointer">
          <Link href="/#nosotros">Nosotros</Link>
        </li>
        <li className="mx-4 text-white cursor-pointer">
          <Link href="/#especialidades">Especialidades</Link>
        </li>
        <li className="mx-4 text-white cursor-pointer">
          <Link href="/#servicios">Servicios</Link>
        </li>
        <li className="mx-4 text-white cursor-pointer">
          <Link href="/documents">Documento</Link>
        </li>
        <li className="mx-4 text-white cursor-pointer">
          <Link href="/#contacto">Contacto</Link>
        </li>
        <li className="mx-4 text-white cursor-pointer">
          <Link href="/#">Citas</Link>
        </li>
        <li className="mx-4 m-auto text-white cursor-pointer">
          <Link href="/#">
            <AiOutlineShoppingCart />
          </Link>
        </li>
        <li className="mx-4 text-white cursor-pointer">
          <Link href="/">Marketplace Abogados</Link>
        </li>
      </ul>
      <button className="hidden md:block text-white mx-2 bg-main hover:text-black px-2 py-1 rounded-2xl">
        Call: +SOY el numero de ADRIAN
      </button>
    </div>
  );
};
