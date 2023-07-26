import React, { useState } from "react";
import FechaCargoRep from "../menu/FechaCargoRep";
import CiudadPacto from "../documents/CiudadPacto";
import { Contrato } from "@/components/pages/contrato";
import NombreCargoLegal from "./NombreCargoLegal";
import NombreEmpleado from "./NombreEmpleado";
import NumeroDNIpasaporte from "./NumeroDNIpasaporte";
import DireccionHabitual from "./DireccionHabitual";
import DuracionDelPacto from "./DuracionDelPacto";
import MontoMensual from "./MontoMensual";
import PagoFechaDePeriodo from "./PagoFechaDePeriodo";
import MontoPorcentajePagar from "./MontoPorcentajePagar";
import JurisdiccionTribunales from "./JurisdiccionTribunales";
import FirmaDigital from "./FirmaDigital";
import CitasButton from "./CitasButton";
// import { DocumentoListo } from "../documents/DocumentoListo";

type MenuLateralProps = {
  contratoInfo: Contrato;
  onContratoInfoChange: (
    updaterFunction: (contratoInfoActual: Contrato) => Contrato
  ) => void;
};

export default function MenuLateral({
  contratoInfo,
  onContratoInfoChange,
}: MenuLateralProps) {
  const [formularioActual, setFormularioActual] = useState(0);

  const handleSiguiente = () => {
    setFormularioActual((formularioActual) => formularioActual + 1);
  };

  const handleAnterior = () => {
    setFormularioActual((formularioActual) => formularioActual - 1);
  };

  const handleDataChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    onContratoInfoChange((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  switch (formularioActual) {
    case 0:
      return (
        <CiudadPacto
          contratoInfo={contratoInfo}
          onChange={handleDataChange}
          onSiguiente={handleSiguiente}
        />
      );
    case 1:
      return (
        <FechaCargoRep
          contratoInfo={contratoInfo}
          onChange={handleDataChange}
          onSiguiente={handleSiguiente}
          onAnterior={handleAnterior}
        />
      );
    case 2:
      return (
        <NombreCargoLegal
          contratoInfo={contratoInfo}
          onChange={handleDataChange}
          onSiguiente={handleSiguiente}
          onAnterior={handleAnterior}
        />
      );
    case 3:
      return (
        <NombreEmpleado
          contratoInfo={contratoInfo}
          onChange={handleDataChange}
          onSiguiente={handleSiguiente}
          onAnterior={handleAnterior}
        />
      );
    case 4:
      return (
        <NumeroDNIpasaporte
          contratoInfo={contratoInfo}
          onChange={handleDataChange}
          onSiguiente={handleSiguiente}
          onAnterior={handleAnterior}
        />
      );
    case 5:
      return (
        <DireccionHabitual
          contratoInfo={contratoInfo}
          onChange={handleDataChange}
          onSiguiente={handleSiguiente}
          onAnterior={handleAnterior}
        />
      );
    case 6:
      return (
        <DuracionDelPacto
          contratoInfo={contratoInfo}
          onChange={handleDataChange}
          onSiguiente={handleSiguiente}
          onAnterior={handleAnterior}
        />
      );
    case 7:
      return (
        <MontoMensual
          contratoInfo={contratoInfo}
          onChange={handleDataChange}
          onSiguiente={handleSiguiente}
          onAnterior={handleAnterior}
        />
      );
    case 8:
      return (
        <PagoFechaDePeriodo
          contratoInfo={contratoInfo}
          onChange={handleDataChange}
          onSiguiente={handleSiguiente}
          onAnterior={handleAnterior}
        />
      );
    case 9:
      return (
        <MontoPorcentajePagar
          contratoInfo={contratoInfo}
          onChange={handleDataChange}
          onSiguiente={handleSiguiente}
          onAnterior={handleAnterior}
        />
      );
    case 10:
      return (
        <JurisdiccionTribunales
          contratoInfo={contratoInfo}
          onChange={handleDataChange}
          onSiguiente={handleSiguiente}
          onAnterior={handleAnterior}
        />
      );
    case 11:
      return (
        <FirmaDigital
          contratoInfo={contratoInfo}
          onChange={handleDataChange}
          onSiguiente={handleSiguiente}
          onAnterior={handleAnterior}
        />
      );
    case 12:
      return (
        <CitasButton
          contratoInfo={contratoInfo}
          onChange={handleDataChange}
          onAnterior={handleAnterior}
        />
      );
  }
}
