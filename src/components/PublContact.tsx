import React from "react";
import piesPagina from "../assets/image/imgResl.png";

export const PublContact = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${piesPagina.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "400px",
      }}
    >
      <div className="py-20 px-36 m-8 text-center">
        <h1 className="m-auto text-white text-5xl font-bold">
          Resolvemos todos tus casos con transparencia
        </h1>
        <p className="text-white text-xl mt-8 px-36 mb-8 m-20">
          Mas de 40 años de experiencia nos respaldan, combinando todos nuestros
          conocimientos y experiencia buscamos la excelencia en cada caso que se
          nos presenta.
        </p>
        <button className="text-white bg-main hover:text-black px-8 py-2 rounded-xl">
          CONTACTANOS
        </button>
      </div>
    </div>
  );
};
