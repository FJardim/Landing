import React from "react";

export const Context = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-8 md:p-24 md:m-8 w-full md:w-1/2">
        <h1 className="text-white text-5xl font-bold">Escribania Duek</h1>
        <p className="text-white text-2xl font-bold mt-8 mb-8">
          Nos respaldan más de 40 años de trayectoria brindando servicios
          notariales-legales, destacándose como un equipo serio y comprometido
          con sus clientes.
        </p>
        <button className="text-white bg-main hover:text-black px-8 py-2 rounded-xl">
          CONTACTANOS
        </button>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};
