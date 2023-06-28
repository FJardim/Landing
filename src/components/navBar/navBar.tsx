import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/image/EscribaniaD.png";
import portada from "../../assets/image/imgED.jpg";

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
        <ul className="lg:flex ml-4 hidden md:block">
          <li className="mx-4 text-white cursor-pointer">
            <Link href="#nosotros">Nosotros</Link>
          </li>
          <li className="mx-4 text-white cursor-pointer">
            <Link href="#especialidades">Especialidades</Link>
          </li>
          <li className="mx-4 text-white cursor-pointer">
            <Link href="#servicios">Servicios</Link>
          </li>
          <li className="mx-4 text-white cursor-pointer">
            <Link href="/documents">Documento</Link>
          </li>
          <li className="mx-4 text-white cursor-pointer">
            <Link href="#contacto">Contacto</Link>
          </li>
          <li className="mx-4 text-white cursor-pointer">
            <Link href="#marketplace-abogados">Marketplace Abogados</Link>
          </li>
        </ul>
        <button className="hidden md:block text-white mx-8 bg-main hover:text-black px-2 py-1 rounded-2xl">
          Call: +SOY EL NUMERO DE ADRIAN
        </button>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="p-8 md:p-24 md:m-8 w-full md:w-1/2">
          <h1 className="text-white text-5xl font-bold">Escribania Duek</h1>
          <p className="text-white text-2xl font-bold mt-8 mb-8">
            Nos respaldan más de 40 años de trayectoria brindando servicios
            notariales-legales, destacándose como un equipo serio y comprometido
            con sus clientes.
          </p>
          <button className="text-white bg-main hover:text-black px-8 py-2 rounded-xl">
            CONTACTANOS
          </button>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};
