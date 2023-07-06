import { Contrato } from "@/components/pages/contrato";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import MontoMensual from "./MontoMensual";

const montoPorcentaje = ["Monto", "Porcentaje"];
const numeroPorcentaje = [
  "0.5%",
  "10%",
  "20%",
  "30%",
  "40%",
  "50%",
  "60%",
  "70%",
  "80%",
  "90%",
  "100%",
];
const denominacion = ["Pesos", "Dolar", "Euros"];

type MontoPorcentajePagarProps = {
  contratoInfo: Contrato;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  onSiguiente: () => void;
  onAnterior: () => void;
};

export default function MontoPorcentajePagar({
  contratoInfo,
  onChange,
  onSiguiente,
  onAnterior,
}: MontoPorcentajePagarProps) {
  return (
    <div className="bg-white rounded-lg p-4">
      <p className="text-base font-semibold pt-2">
        Monto o porcentaje a pagar de la última remuneración mensual percibida
        por el Empleado
      </p>
      <div className="flex space-x-4">
        <select
          className="border-2 border-gray-400 rounded-md border-color w-42 custom-select p-2"
          name="porcentaje"
          onChange={onChange}
          value={contratoInfo.porcentaje}
        >
          <option value="" disabled>
            Porcentaje
          </option>
          {montoPorcentaje.map((porcentaje, index) => (
            <option key={index} value={porcentaje}>
              {porcentaje}
            </option>
          ))}
        </select>
      </div>
      {contratoInfo.porcentaje === "Monto" ? (
        <div className="flex pt-2 space-x-4">
          <input
            className="border-2 border-gray-400 rounded-md border-color custom-select  p-1.5"
            id="date-input"
            type="text"
            placeholder="50 000"
            name="numMonto"
            value={contratoInfo.numMonto}
            onChange={onChange}
          />
          <select
            className="border-2 border-gray-400 rounded-md border-color custom-select p-2"
            name="denoMonto"
            onChange={onChange}
            value={contratoInfo.denoMonto}
          >
            <option value="" disabled>
              Pesos
            </option>
            {denominacion.map((denoMonto, index) => (
              <option key={index} value={denoMonto}>
                {denoMonto}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div className="flex pt-2 space-x-4">
          <select
            className="border-2 border-gray-400 rounded-md border-color custom-select p-2"
            name="porcentMonto"
            onChange={onChange}
            value={contratoInfo.porcentMonto}
          >
            <option value="" disabled>
              %
            </option>
            {numeroPorcentaje.map((porcentMonto, index) => (
              <option key={index} value={porcentMonto}>
                {porcentMonto}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="pt-2 flex space-x-4">
        <button
          className="flex bg-main text-black hover:text-white p-2 rounded-xl"
          onClick={onAnterior}
        >
          <MdArrowForwardIos className="m-auto ml-auto" />
          Paso anterior
        </button>
        <button
          className="flex bg-main text-black hover:text-white p-2 rounded-xl"
          onClick={onSiguiente}
        >
          Siguiente paso <MdArrowForwardIos className="m-auto ml-auto" />
        </button>
      </div>

      <p className="mt-4 text-sm underline">Modificar modelo</p>
      <p className="mt-2 text-sm underline">Guardarlo (y seguir después)</p>
    </div>
  );
}
