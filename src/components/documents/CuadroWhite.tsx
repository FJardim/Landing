import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

export default function CuadroWhite() {
  return (
    <div className="bg-white rounded-lg p-4">
      <p className="text-base font-semibold">
        ¿En que ciudad se firmará el pacto?
      </p>
      <select className="border-2 border-gray-400 rounded-md border-color custom-select w-full p-2">
        <option value="opcion1">Opción 1</option>
        <option value="opcion2" selected>
          Opción 2
        </option>
        <option value="opcion3">Opción 3</option>
      </select>
      <div className="pt-2">
        <button className="flex bg-main text-black hover:text-white p-2 rounded-xl">
          Siguientes paso <MdArrowForwardIos className="m-auto" />
        </button>
      </div>
      <p className="mt-4 text-sm underline">Modificar modelo</p>
      <p className="mt-2 text-sm underline">Guardarlo (y seguir después)</p>
    </div>
  );
}
