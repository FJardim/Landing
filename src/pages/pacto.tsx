import React from "react";
import Image from "next/image";
import { NavBar } from "../components/navBar/navBar";
import portada from "../assets/image/portadaDos.jpg";
import { BiTimeFive } from "react-icons/bi";
import { GrDocumentText } from "react-icons/gr";
import { LiaArrowsAltVSolid } from "react-icons/lia";
import documents from "@/components/assets/image/documents.png";
import { Cuerpo } from "../components/Cuerpo";
import Link from "next/link";

export default function Pacto() {
  return (
    <div className="bg-[#D9D9D9]">
      <div
        className=""
        style={{
          backgroundImage: `url(${portada.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <NavBar />
      </div>
      <div className="container px-6 pt-6">
        <div className="flex flex-col items-center text-xl font-medium space-y-4 md:flex-row md:justify-start md:space-y-0 md:space-x-20">
          <p className="lg:ml-24">Profesiones</p>
          <p>Recursos Humanos, derecho laboral</p>
          <p>Pacto de no Concurrencia Laboral</p>
        </div>
        <div className="lg:flex mt-6 text-center lg:justify-around">
          <div className="text-cyan-600 text-2xl lg:mt-6 lg:mr-28">
            Pacto de No Concurreira Laboral
          </div>
          <Link href={"/contrato"}>
            <button className="mt-6 text-white mx-8 bg-main hover:text-black px-4 py-1 rounded-2xl">
              Completar el modelo
            </button>
          </Link>
          <div></div>
        </div>

        <div className="flex flex-col items-center mt-6 md:flex-row md:justify-start">
          <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-8">
            <BiTimeFive className="lg:ml-24" style={{ fontSize: "38px" }} />
            <div className="text-lg ml-2">
              <p className="font-bold">Última revisión</p>
              <p className="text-sm text-gray-600">24/01/2023</p>
            </div>
            <GrDocumentText className="lg:ml-8" style={{ fontSize: "38px" }} />
            <div className="text-lg">
              <p className="font-bold">Última revisión</p>
              <p className="text-sm text-gray-600">Word y PDF</p>
            </div>
            <LiaArrowsAltVSolid
              className="lg:ml-8"
              style={{ fontSize: "38px" }}
            />
            <div className="text-lg">
              <p className="font-bold">Tamaño</p>
              <p className="text-sm text-gray-600">11 a 17 páginas</p>
            </div>
          </div>
          <div className="lg:ml-auto lg:mr-24">
            <Image src={documents} alt="imagen" width={200} height={100} />
          </div>
        </div>
      </div>
      <Cuerpo />
    </div>
  );
}
