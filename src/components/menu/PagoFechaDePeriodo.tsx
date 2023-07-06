import { Contrato } from "@/components/pages/contrato";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const metodoPago = ["Método 1", "Método 2", "Método 3", "Método 4"];

type PagoFechaDePeriodoProps = {
  contratoInfo: Contrato;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  onSiguiente: () => void;
  onAnterior: () => void;
};

export default function PagoFechaDePeriodo({
  contratoInfo,
  onChange,
  onSiguiente,
  onAnterior,
}: PagoFechaDePeriodoProps) {
  return (
    <div className="bg-white rounded-lg p-4">
      <p className="text-base font-semibold pt-2">
        ¿Como se realizara el pago durante el periodo de duración del pacto?
      </p>
      <select
        className="border-2 border-gray-400 rounded-md border-color custom-select p-2"
        name="metodoPago"
        onChange={onChange}
        value={contratoInfo.metodoPago}
      >
        <option value="" disabled>
          Métodos de pago
        </option>
        {metodoPago.map((metodoPago, index) => (
          <option key={index} value={metodoPago}>
            {metodoPago}
          </option>
        ))}
      </select>
      <p className="text-base font-semibold pt-2">
        Fecha de pago durante el periodo del pacto
      </p>
      <div className="pt-2 space-y-3">
        <input
          className="border-2 border-gray-400 rounded-md border-color custom-select w-42 p-1.5"
          id="date-input"
          type="date"
          placeholder="fecha de pago"
          name="fechaPago"
          value={contratoInfo.fechaPago}
          onChange={onChange}
        />
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
