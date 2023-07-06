import { Contrato } from "@/components/pages/contrato";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const ciudades = ["Cordoba", "Mar de Plata", "Rosario"];
const lugares = ["Carabobo", "Cojedes", "Falcón"];

type JurisdiccionTribunalesProps = {
  contratoInfo: Contrato;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  onSiguiente: () => void;
  onAnterior: () => void;
};

export default function JurisdiccionTribunales({
  contratoInfo,
  onChange,
  onSiguiente,
  onAnterior,
}: JurisdiccionTribunalesProps) {
  return (
    <div className="bg-white rounded-lg p-4">
      <p className="text-base font-semibold">
        ¿Jurisdicción de los trubunales competentes?
      </p>
      <div className="pt-4 space-y-4">
        <select
          className="border-2 border-gray-400 rounded-md border-color custom-select w-full p-2"
          name="ciudadJurisciccion"
          onChange={onChange}
          value={contratoInfo.ciudadJurisciccion}
        >
          <option value="" disabled>
            Seleccione una Ciudad
          </option>
          {ciudades.map((ciudadJurisciccion, index) => (
            <option key={index} value={ciudadJurisciccion}>
              {ciudadJurisciccion}
            </option>
          ))}
        </select>
      </div>
      <p className="pt-4 text-base font-semibold">¿Seleccione el Lugar?</p>
      <div className="pt-4 space-y-4">
        <select
          className="border-2 border-gray-400 rounded-md border-color custom-select w-full p-2"
          name="lugarConformidad"
          onChange={onChange}
          value={contratoInfo.lugarConformidad}
        >
          <option value="" disabled>
            Seleccione un lugar
          </option>
          {lugares.map((lugarConformidad, index) => (
            <option key={index} value={lugarConformidad}>
              {lugarConformidad}
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
