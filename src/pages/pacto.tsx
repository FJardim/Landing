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
        <div className="flex justify-start space-x-20 text-xl font-medium">
          <p className="ml-24">Profesiones</p>
          <p>Recursos Humanos, derecho laboral</p>
          <p>Pacto de no Concurrencia Laboral</p>
        </div>
        <div className="flex mt-6 justify-around">
          <div className="text-cyan-600 text-2xl mt-6 mr-28">
            Pacto de No Concurreira Laboral
          </div>
          <Link href={"/contrato"}>
            <button className="hidden md:block mt-6 text-white mx-8 bg-main hover:text-black px-4 py-1 rounded-2xl">
              Completar el modelo
            </button>
          </Link>
          <div></div>
        </div>

        <div className="flex justify-start mt-6">
          <div className="flex mt-6">
            <BiTimeFive className="ml-24" style={{ fontSize: "38px" }} />
            <div className="text-lg ml-2">
              <p className="font-bold">Última revisión</p>
              <p className="text-sm text-gray-600">24/01/2023</p>
            </div>
            <GrDocumentText className="ml-8" style={{ fontSize: "38px" }} />
            <div className="text-lg">
              <p className="font-bold">Última revisión</p>
              <p className="text-sm text-gray-600">Word y PDF</p>
            </div>
            <LiaArrowsAltVSolid className="ml-8" style={{ fontSize: "38px" }} />
            <div className="text-lg">
              <p className="font-bold">Tamaño</p>
              <p className="text-sm text-gray-600">11 a 17 páginas</p>
            </div>
          </div>
          <div className="ml-auto mr-24">
            <Image src={documents} alt="imagen" width={200} height={100} />
          </div>
        </div>
      </div>
      <Cuerpo />
    </div>
  );
}
