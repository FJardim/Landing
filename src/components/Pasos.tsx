import React from "react";
import Gestion from "./Gestion";
import CardInfo from "./Card/CardsInfo";
import { SlDocs } from "react-icons/sl";
import { PiNotePencil } from "react-icons/pi";
import { BsPrinter } from "react-icons/bs";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";

export default function Pasos() {
  return (
    <div className="container bg-gray-200">
      <Gestion
        title={"¡Crea con facilidad tus documentos Legales!"}
        parraph={
          "Un formulario muy intuitivo te guiara en la redaccion de tus documentos"
        }
      />
      <div className="mx-auto w-full max-w-[1000px] mb-8 p-4">
        <div className="relative flex items-center">
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main pl-8"
            placeholder="Buscar un Documento"
          />
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
            <AiOutlineSearch className="text-gray-400 h-5 w-5" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-around items-center space-y-4 pb-8 px-32">
        <Link className="mt-4" href="/modelos">
          <CardInfo
            title={"1. Elegi un modelo"}
            text={"Podes elegir entre los 110 modelos disponibles"}
            icon={<SlDocs />}
          />
        </Link>
        <Link className="mt-4" href="/pacto">
          <CardInfo
            title={"2. Completar el Documento"}
            text={"Podes elegir entre los 110 modelos disponibles"}
            icon={<PiNotePencil />}
          />
        </Link>
        <CardInfo
          title={"3. Guardar e Imprimir"}
          text={"Podes elegir entre los 110 modelos disponibles"}
          icon={<BsPrinter />}
        />
      </div>
    </div>
  );
}
