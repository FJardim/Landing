import React from "react";
import { NavBar } from "../components/navBar/NavBar";
import portada from "../assets/image/portadaDos.jpg";
import DocumentsPactoLaboral from "../components/documents/DocumentoPactoLaboral";
import CuadroWhite from "../components/documents/CuadroWhite";

export default function Contratos() {
  return (
    <div className="bg-[#D9D9D9]">
      <>
        <div
          className=""
          style={{
            backgroundImage: `url(${portada.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "130px",
          }}
        >
          <NavBar />
        </div>
        <div className="text-cyan-600 text-2xl mt-6 mr-28 ml-12">
          Pacto de No Concurrencia Laboral
        </div>
      </>
      <div className="flex p-10">
        <div className="w-1/2 pl-4 pr-4">
          <CuadroWhite />
        </div>
        <div className="w-full bg-white">
          <DocumentsPactoLaboral />
        </div>
      </div>
    </div>
  );
}
