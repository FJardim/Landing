import React from "react";

export const MercadoPago = () => {
  return (
    <div className=" font-semibold ">
      {/* Columna 1 */}

      <div className="p-2">
        <span className="text-xl">Datos de Mercado Pago</span>

        <div className="px-6 text-center">
          <ul className="mt-2 border border-main  rounded-lg">
            <li className="text-black text-2xl m-2">
              Titular: Escribania Duek, C.A
            </li>
            <li className="mx-4">
              <p className="text-gray-400">
                Banco Banesco (0134) - 0414-9620130 - J-23691285-9
              </p>
            </li>
            <li>
              <p className="text-gray-400">
                Banco Nacional de Crédito (0191) - 0412-6237845 - J-23691285-9
              </p>
            </li>
            <li>
              <p className="text-gray-400 mb-2">
                Banco de Venezuela (0102) - 0424-9012450 - J-23691285-9
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Columna 2 */}
      <div className="p-4">
        <div className="">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Nombre Completo:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main"
            placeholder="Ingrese su nombre"
          />
        </div>
        <div className="grid grid-cols-2 mt-4 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Fecha de la Emisión
            </label>
            <input
              type="date"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main"
              placeholder="Ingrese su nombre"
            />
          </div>
          <div className="">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Número de Referencia:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main"
              placeholder="Ingrese su nombre"
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="documentType"
            className="block text-gray-700 font-bold mb-2"
          >
            Tipo de Documento Solicitado:
          </label>
          <select
            id="documentType"
            name="documentType"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main"
            // Agrega un valor predeterminado seleccionado si es necesario
            defaultValue=""
          >
            {/* Opción predeterminada para seleccionar */}
            <option value="" disabled>
              Seleccione un tipo de documento
            </option>
            {/* Opciones disponibles */}
            <option value="option1">Documento 1</option>
            <option value="option2">Documento 2</option>
            <option value="option3">Documento 3</option>
            {/* Agrega más opciones según sea necesario */}
          </select>
        </div>
        <div className="mt-4">
          <label
            htmlFor="comment"
            className="block text-gray-700 font-bold mb-2"
          >
            Comentario:
          </label>
          <textarea
            id="comment"
            name="comment"
            // rows="4" // Puedes ajustar el número de filas según tus necesidades
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main"
            placeholder="Escribe tu comentario aquí"
          ></textarea>
        </div>
        <div className="mt-4">
          <label
            htmlFor="fileInput"
            className="block text-gray-700 font-bold mb-2"
          >
            Subir archivo:
          </label>
          <input
            type="file"
            id="fileInput"
            name="fileInput"
            className="w-full"
            // Agrega más atributos o manejo de eventos según sea necesario
          />
        </div>
      </div>
    </div>
  );
};
