import { Contrato } from "@/components/pages/contrato";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const ciudades = ["Venezuela", "Colombia", "Brasil"];

type CiudadPactoProps = {
  contratoInfo: Contrato;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  onSiguiente: () => void;
};

export default function CiudadPacto({
  contratoInfo,
  onChange,
  onSiguiente,
}: CiudadPactoProps) {
  return (
    <div className="bg-white rounded-lg p-4">
      <p className="text-base font-semibold">
        ¿En qué ciudad se firmará el pacto?
      </p>
      <select
        className="border-2 border-gray-400 rounded-md border-color custom-select w-full p-2"
        name="ciudad"
        onChange={onChange}
        value={contratoInfo.ciudad}
      >
        <option value="" disabled>
          Seleccione una cuidad
        </option>
        {ciudades.map((ciudad, index) => (
          <option key={index} value={ciudad}>
            {ciudad}
          </option>
        ))}
      </select>
      <div className="pt-2">
        <button
          className="flex bg-main text-black hover:text-white p-2 rounded-xl"
          onClick={onSiguiente}
        >
          Siguiente paso <MdArrowForwardIos className="m-auto" />
        </button>
      </div>
      <p className="mt-4 text-sm underline">Modificar modelo</p>
      <p className="mt-2 text-sm underline">Guardarlo (y seguir después)</p>
    </div>
  );
}
