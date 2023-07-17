import React from "react";
import { CuerpoModelo } from "./documents/CuerpoModelo";
import { FaRegEdit } from "react-icons/fa";
import { FiPrinter } from "react-icons/fi";
import { PiFileTextBold } from "react-icons/pi";

export const Cuerpo = () => {
  const data = [
    {
      icon: <FaRegEdit style={{ fontSize: "68px", color: "white" }} />,
      title: "1. Elegir este modelo",
      description: "Empezá haciendo clic en Completar el modelo.",
    },
    {
      icon: <PiFileTextBold style={{ fontSize: "68px", color: "white" }} />,
      title: "2. Completar el documento",
      description:
        "Contesta alguna preguntas y tu documento tipo se crearla automáticamente.",
    },
    {
      icon: <FiPrinter style={{ fontSize: "68px", color: "white" }} />,
      title: "3. Guardar e Imprimir",
      description:
        "¡Tu documento ya esta listo! Lo recibiras en los formatos Word y PDF, lo podrás modificar.",
    },
  ];

  return (
    <div className="flex lg:pr-10 pb-10">
      <div className="w-1/2 p-4 hidden md:block">
        <p className="ml-6 text-2xl font-semibold">¿Cómo funciona?</p>
        <div className="flex flex-col p-4">
          {data.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <div>{item.icon}</div>
              <div className="p-4">
                <p className="text-2xl font-semibold">{item.title}</p>
                <p className="text-xl">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-white">
        <CuerpoModelo />
      </div>
    </div>
  );
};
