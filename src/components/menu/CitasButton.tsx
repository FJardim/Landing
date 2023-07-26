import { Contrato } from "@/components/pages/contrato";
import Link from "next/link";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

type CitasButtonProps = {
  contratoInfo: Contrato;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  onAnterior: () => void;
};

export default function CitasButton({
  contratoInfo,
  onChange,
  onAnterior,
}: CitasButtonProps) {
  return (
    <div className="bg-white rounded-lg p-4">
      <p className="text-base font-semibold pt-2">¿Solicitud de Citas?</p>
      <div className="pt-2 space-y-3">
        <Link href={"/citas"}>
          <button className="flex bg-blue-500 text-white hover:bg-blue-600 p-2 w-full justify-center text-md rounded-xl">
            Solicitar Citas
          </button>
        </Link>
      </div>

      <div className="pt-2 flex space-x-4">
        <button
          className="flex bg-main text-black hover:text-white p-2 rounded-xl"
          onClick={onAnterior}
        >
          <MdArrowForwardIos className="m-auto ml-auto" />
          Paso anterior
        </button>
      </div>

      <p className="mt-4 text-sm underline">Modificar modelo</p>
      <p className="mt-2 text-sm underline">Guardarlo (y seguir después)</p>
    </div>
  );
}
