import React from "react";

export default function Servicios({ title }: { title: string }) {
  const documents = [
    "Compraventa",
    "Afectación y Desafectación al Régimen de Protección de la Vivienda",
    "Contrato de locación",
    "Poderes",
    "Donación",
    "Permuta",
    "Constitución y Cancelación de Usufructo",
    "Constitución y Cancelación de Hipoteca",
    "Actas de Constatación, Manifestación y Notificaciones",
    "Testamentos",
    "Constituciones y Modificaciones de Sociedades",
    "Trámites Societarios",
  ];
  return (
    <div className="lg:p-14">
      <div className="bg-white border-2 border-black p-4">
        <p className="lg:justify-center text-center flex text-5xl font-semibold mb-6 mt-6">
          {title}
        </p>
        <div className="flex justify-around">
          <ul className="text-xl m-7 list-disc">
            <p className="mb-6 font-semibold text-lg ">Profesionales</p>
            {documents.map((document, index) => (
              <li key={index} className="text-base">
                {document}
              </li>
            ))}
          </ul>
          <ul className="text-xl m-7 list-disc">
            <p className="mb-6 font-semibold text-lg">Particulares</p>
            {documents.map((document, index) => (
              <li key={index} className="text-base">
                {document}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
