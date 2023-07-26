import React, { useState } from "react";
import { NavBar } from "../components/navBar/navBar";
import portada from "../assets/image/portadaDos.jpg";
import { BsCashCoin, BsBank } from "react-icons/bs";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { Transferencia } from "../components/metodoPago/Transferencia";
import { MercadoPago } from "../components/metodoPago/MercadoPago";
import { Efectivo } from "../components/metodoPago/Efectivo";

export default function Carrito() {
  const [selectedOption, setSelectedOption] = useState("transferencia");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <div className="bg-[#D9D9D9]">
      <>
        <div
          className=""
          style={{
            backgroundImage: `url(${portada.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <NavBar />
        </div>
        <div className="p-6">
          <p className="text-cyan-600 text-center text-2xl mt-6">
            Metodo de Pago
          </p>
        </div>
      </>
      <div className="lg:flex lg:p-4 lg:space-x-6 justify-center">
        <div className="w-full p-2">
          <div className="lg:flex justify-center lg:space-x-4">
            {/* Contenedor para las dos columnas */}
            <div className="lg:w-1/4 h-[20rem] bg-white p-6 rounded-lg">
              <div className="px-2 space-y-4">
                {/* Primera columna */}
                <div
                  className={`border rounded p-4 flex items-center cursor-pointer hover:border-main text-lg font-semibold ${
                    selectedOption === "transferencia"
                      ? "bg-main text-white"
                      : ""
                  }`}
                  onClick={() => handleOptionClick("transferencia")}
                >
                  <BsBank className="mr-2 h-12 w-12" />
                  Transferencia
                </div>
                <div
                  className={`border rounded p-4 flex items-center cursor-pointer hover:border-main text-lg font-semibold ${
                    selectedOption === "MercadoPago" ? "bg-main text-white" : ""
                  }`}
                  onClick={() => handleOptionClick("MercadoPago")}
                >
                  <MdOutlineMobileFriendly className="mr-2 h-12 w-12" />
                  Mercado Pago
                </div>
                <div
                  className={`border rounded p-4 flex items-center cursor-pointer hover:border-main text-lg font-semibold 
                  ${selectedOption === "efectivo" ? "bg-main text-white" : ""}`}
                  onClick={() => handleOptionClick("efectivo")}
                >
                  <BsCashCoin className="mr-2 h-12 w-12" />
                  Efectivo
                </div>
              </div>
            </div>
            <div className="lg:w-4/5 bg-white p-6 rounded-lg">
              {/* Contenido que se actualizará según la opción seleccionada */}
              {selectedOption === "transferencia" && <Transferencia />}
              {selectedOption === "MercadoPago" && <MercadoPago />}
              {selectedOption === "efectivo" && <Efectivo />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
