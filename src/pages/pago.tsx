import React, { useState } from "react";
import { NavBar } from "../components/navBar/navBar";
import portada from "../assets/image/portadaDos.jpg";
import PagoSeguro from "../components/PagoSeguro";
import Link from "next/link";
import Router from "next/router";

export default function Pago() {
  const [cardNumber, setCardNumber] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const formattedValue = value
      .replace(/\D/g, "") // Elimina caracteres que no sean dígitos
      .slice(0, 4) // Limita el valor a un máximo de 4 caracteres
      .replace(/(\d{2})(\d{0,2})/, "$1/$2"); // Agrega el formato MM/AA

    event.target.value = formattedValue;
  };

  const handleInputChangeTarjet = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const numericValue = value.replace(/\D/g, ""); // Elimina cualquier carácter que no sea un número
    const truncatedValue = numericValue.slice(0, 20); // Limita el valor a un máximo de 20 caracteres

    setCardNumber(truncatedValue);
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
            Tu documento esta listo
          </p>
        </div>
      </>
      <div className="lg:flex lg:p-10 lg:space-x-16 space-y-6">
        <div className="w-full bg-white p-8 rounded-lg">
          <div className="p-4 bg-stone-200 border-t-2 border-r-2 border-l-2 border-black rounded-t-lg">
            <p className="font-semibold ">Pacto de No Concurrencia Laboral</p>
            <div className="flex">
              <div className="flex-1">
                <p className="text-gray-500">
                  Descarga inmediata en formatos Word y PDF
                </p>
                <p className="text-gray-500">Precio en pesos argentinos</p>
              </div>
              <div className="flex-1 flex justify-end ">
                <p className="text-black font-bold">$399.00</p>
              </div>
            </div>
          </div>

          <div className="flex bg-white border-t-2 w-full border-2 border-black rounded-b-lg">
            <div className="flex-1">
              <p className="pl-4 p-2 font-semibold">
                Importe total, con impuestos
              </p>
            </div>
            <div className="flex-1 flex justify-end ">
              <p className="text-black font-bold p-2 pr-4">$399.00</p>
            </div>
          </div>
          <div className="flex justify-center lg:p-6">
            <div className="flex flex-col items-center">
              <p className="mb-2 font-bold p-4">
                Dirección de correo electrónico (para recibir el documento)
              </p>
              <input
                className="border border-black rounded-md w-full p-2"
                placeholder="Dirección de correo"
              />
            </div>
          </div>
          <div className="lg:flex justify-center space-x-2">
            <div className="flex-col items-center">
              <p className="mb-2 font-bold ">Número de tarjeta </p>
              <input
                className="border border-black lg:w-56 w-full rounded-md p-2"
                placeholder="Numero de Tarjeta"
                value={cardNumber}
                onChange={handleInputChangeTarjet}
              />
            </div>
            <div className="flex-col items-center">
              <p className="mb-2 font-bold ">Fecha </p>
              <input
                className="border border-black rounded-md p-2"
                placeholder="MM/AA"
                maxLength={5}
                onChange={handleInputChange} // Escucha los cambios en el input
              />
            </div>
            <div className="flex-col items-center">
              <p className="mb-2 font-bold ">CVC/CVV </p>
              <input
                className="border border-black lg:w-12 rounded-md p-2"
                placeholder="XXX"
                maxLength={3}
              />
            </div>
          </div>
          <div className="flex justify-center p-6">
            <button
              className="bg-cyan-600 p-2 text-white rounded-2xl"
              onClick={() => {
                Router.push({
                  pathname: "/documents",
                  query: { pay_completed: "true" },
                });
              }}
            >
              Confirmar y descargar el documento
            </button>
          </div>
        </div>
        <PagoSeguro />
      </div>
    </div>
  );
}
