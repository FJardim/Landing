import React from "react";
import Cards from "./Card/Cards";

export default function Cifras({
  title,
  parraph,
}: {
  title: string;
  parraph: string;
}) {
  return (
    <div className="Container bg-white p-20">
      <div className=" text-center space-y-6 mb-10">
        <p className="text-4xl">{title}</p>
        <p className="text-2xl text-gray-400">{parraph}</p>
      </div>
      <div className="flex justify-around">
        <Cards
          title={"3.271.185"}
          text={"Usuarios ya han confiado en nosotros"}
        />
        <Cards
          title={"110"}
          text={"Modelos de cartas y contratos en Argentina "}
        />
        <Cards title={"26"} text={"Disponibles en 26 Paises"} />
      </div>
    </div>
  );
}
