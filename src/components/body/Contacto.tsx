import React from "react";
export default function Contacto({ title }: { title: string }) {
  return (
    <div>
      <p className="flex justify-center font-bold text-5xl">{title}</p>
      <div className="flex items-center justify-center lg:p-12 mt-6">
        <div className="mx-auto w-full max-w-[1000px]">
          <form method="POST">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Nombre:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main"
                  placeholder="Ingrese su nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Apellido:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main"
                  placeholder="Ingrese su Apellido"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Teléfono:
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main"
                  placeholder="Ingrese su número de teléfono"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Whatsapp:
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main"
                  placeholder="Ingrese su Whatsapp"
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email:
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main"
                  placeholder="Ingrese tu Email"
                />
              </div>
              <div>
                <label
                  htmlFor="comments"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Comentarios:
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main"
                  rows={5}
                  placeholder="Ingrese sus comentarios"
                />
              </div>
            </div>
            <button className="px-4 py-2 bg-main hover:text-black text-white font-semibold rounded">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
