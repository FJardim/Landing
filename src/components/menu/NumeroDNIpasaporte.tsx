import { Contrato } from "@/components/pages/contrato";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

type NombreEmpleadoProps = {
  contratoInfo: Contrato;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  onSiguiente: () => void;
  onAnterior: () => void;
};

export default function NombreEmpleado({
  contratoInfo,
  onChange,
  onSiguiente,
  onAnterior,
}: NombreEmpleadoProps) {
  return (
    <div className="bg-white rounded-lg p-4">
      <p className="text-base font-semibold pt-2">Número de DNI</p>
      <div className="pt-2 space-y-3">
        <input
          className="border-2 border-gray-400 rounded-md border-color custom-select w-full p-1.5"
          id="date-input"
          type="text"
          placeholder="Número de DNI"
          name="numeroDni"
          value={contratoInfo.numeroDni}
          onChange={onChange}
        />
        <div className="flex">
          <input
            className="border-2 border-gray-400 rounded-md border-color custom-select p-1.5"
            id="date-input"
            type="radio"
          />
          <label
            htmlFor="date-input"
            style={{ display: "inline-block", marginLeft: "5px" }}
          >
            <b>Pasaporte</b>
          </label>
        </div>
        <div className="flex">
          <input
            className="border-2 border-gray-400 rounded-md border-color custom-select p-1.5"
            id="date-input"
            type="radio"
          />
          <label
            htmlFor="date-input"
            style={{ display: "inline-block", marginLeft: "5px" }}
          >
            <b>DNI</b>
          </label>
        </div>
        <input
          className="border-2 border-gray-400 rounded-md border-color custom-select w-full p-1.5"
          id="date-input"
          type="text"
          placeholder="Nacionalidad"
          name="nacionalidad"
          value={contratoInfo.nacionalidad}
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
