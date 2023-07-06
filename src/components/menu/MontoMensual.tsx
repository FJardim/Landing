import { Contrato } from "@/components/pages/contrato";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const denominacion = ["Pesos", "Dolar", "Euros"];

type MontoMensualProps = {
  contratoInfo: Contrato;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  onSiguiente: () => void;
  onAnterior: () => void;
};

export default function MontoMensual({
  contratoInfo,
  onChange,
  onSiguiente,
  onAnterior,
}: MontoMensualProps) {
  return (
    <div className="bg-white rounded-lg p-4">
      <p className="text-base font-semibold pt-2">
        ¿Monto de compensación económica Mensual?
      </p>
      <div className="pt-2 space-x-4">
        <input
          className="border-2 border-gray-400 rounded-md border-color custom-select  p-1.5"
          id="date-input"
          type="text"
          placeholder="50 000"
          name="monto"
          value={contratoInfo.monto}
          onChange={onChange}
        />
        <select
          className="border-2 border-gray-400 rounded-md border-color custom-select p-2"
          name="tipoMonto"
          onChange={onChange}
          value={contratoInfo.tipoMonto}
        >
          <option value="" disabled>
            Pesos
          </option>
          {denominacion.map((tipoMonto, index) => (
            <option key={index} value={tipoMonto}>
              {tipoMonto}
            </option>
          ))}
        </select>
      </div>

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
