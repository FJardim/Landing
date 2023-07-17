import React from "react";
import { BsCheckCircle } from "react-icons/bs";

type ModalProps = {
  visible: boolean;
  onClose: () => void; // Agregamos la función onClose para cerrar el modal
};

export default function Modal({ visible, onClose }: ModalProps) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col">
        <div className="relative">
          <div className="bg-white p-2 rounded-xl">
            <button
              className="absolute top-0 right-0 text-black text-xl mr-6 mt-4"
              onClick={onClose} // Llamamos a la función onClose cuando se hace clic en la X
            >
              X
            </button>
            <div className="bg-white p-2 rounded-md flex flex-col items-center">
              <div className="absolute top-0 mt-20 text-gray-500 text-4xl font-semibold text-center w-full">
                Su pago ha sido efectuado exitosamente
              </div>
              <div className="text-center">
                <BsCheckCircle size={200} className="text-emerald-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
