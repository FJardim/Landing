import React, { useState } from "react";
import { NavBar } from "../components/navBar/navBar";
import portada from "../assets/image/portadaDos.jpg";
import DocumentsPactoLaboral from "../components/documents/DocumentoPactoLaboral";
import CiudadPacto from "../components/documents/CiudadPacto";
import FechaCargoRep from "../components/menu/FechaCargoRep";
import MenuLateral from "../components/menu/MenuLateral";
import { createContext } from "vm";

export interface Contrato {
  fechaDePago: string;
  nombre: string;
  nombreEmpresa: string;
  direccionEmpresa: string;
  cargo: string;
  fechaDeCargo: string;
  costo: string;
  nombreEmpleado: string;
  numeroDni: string;
  nacionalidad: string;
  direccion: string;
  duracionPacto: string;
  monto: string;
  tipoMonto: string;
  metodoPago: string;
  fechaPago: string;
  porcentaje: string;
  numeroPorcentaje: string;
  numMonto: string;
  denoMonto: string;
  porcentMonto: string;
  ciudad: string;
  ciudadJurisciccion: string;
  lugarConformidad: string;
  firmaUno: string;
  firmaDos: string;
}

export default function Contratos() {
  const [contratoInfo, setContratoInfo] = useState<Contrato>({
    fechaDePago: "",
    nombre: "",
    nombreEmpresa: "",
    direccionEmpresa: "",
    cargo: "",
    fechaDeCargo: "",
    costo: "",
    nombreEmpleado: "",
    numeroDni: "",
    nacionalidad: "",
    direccion: "",
    duracionPacto: "",
    monto: "",
    tipoMonto: "",
    metodoPago: "",
    fechaPago: "",
    porcentaje: "",
    numeroPorcentaje: "",
    numMonto: "",
    denoMonto: "",
    porcentMonto: "",
    ciudad: "",
    ciudadJurisciccion: "",
    lugarConformidad: "",
    firmaUno: "",
    firmaDos: "",
  });

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
          <MenuLateral
            contratoInfo={contratoInfo}
            onContratoInfoChange={setContratoInfo}
          />
        </div>

        <div className="w-full bg-white">
          <DocumentsPactoLaboral contratoInfo={contratoInfo} />
        </div>
      </div>
    </div>
  );
}
