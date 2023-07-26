import { Contrato } from "@/components/pages/contrato";
import Link from "next/link";
import { useRef, useState } from "react";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import SignatureCanvas from "react-signature-canvas";

type FirmaDigitalProps = {
  contratoInfo: Contrato;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  onAnterior: () => void;
  onSiguiente: () => void;
};

export default function FirmaDigital({
  contratoInfo,
  onChange,
  onSiguiente,
  onAnterior,
}: FirmaDigitalProps) {
  const empleadoSignRef = useRef<SignatureCanvas | null>(null);
  const representanteSignRef = useRef<SignatureCanvas | null>(null);

  const handleEmpleadoBorrar = () => {
    empleadoSignRef.current?.clear();
  };

  const handleRepresentanteBorrar = () => {
    representanteSignRef.current?.clear();
  };

  return (
    <div className="bg-white rounded-lg p-4">
      <p className="text-base font-semibold">
        Ambas partes deben firmar el contrato de pacto de no concurrencia
        laboral
      </p>
      <div className="p-2">
        <p className="mt-4 text-base font-semibold">Firma del Empleado</p>
        <SignatureCanvas
          canvasProps={{
            width: 400,
            height: 100,
            style: { border: "1px solid black" },
          }}
          ref={empleadoSignRef}
          penColor="black"
          velocityFilterWeight={1}
          dotSize={1}
          onEnd={() => {
            const firma1 = empleadoSignRef.current?.toDataURL();
            const event1 = {
              target: { name: "firmaUno", value: firma1 },
            } as React.ChangeEvent<HTMLInputElement>;
            onChange(event1);
          }}
        />
        <div className="p-2">
          <button
            className="bg-main rounded-xl hover:text-white text-black px-4"
            onClick={handleEmpleadoBorrar}
          >
            Borrar
          </button>
        </div>
      </div>
      <div className="p-2">
        <p className="mt-4 text-base font-semibold">
          Firma del Representante Legal
        </p>
        <SignatureCanvas
          canvasProps={{
            width: 400,
            height: 100,
            style: { border: "1px solid black" },
          }}
          ref={representanteSignRef}
          penColor="black"
          velocityFilterWeight={1}
          dotSize={1}
          onEnd={() => {
            const firma2 = representanteSignRef.current?.toDataURL();
            const event2 = {
              target: { name: "firmaDos", value: firma2 },
            } as React.ChangeEvent<HTMLInputElement>;
            onChange(event2);
          }}
        />
        <div className="p-2">
          <button
            className="bg-main rounded-xl hover:text-white text-black px-4"
            onClick={handleRepresentanteBorrar}
          >
            Borrar
          </button>
        </div>
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
