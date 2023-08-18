import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

type ModalProps = {
  visible: boolean;
  onClose: () => void; // Agregamos la función onClose para cerrar el modal
};

export default function AuthModal({ visible, onClose }: ModalProps) {
  const [activeContent, setActiveContent] = useState("login");
  const [registroVisible, setRegistroVisible] = useState(false); // Estado para controlar la visibilidad del componente Registro

  //API
  const [formDataLogin, setFormDataLogin] = useState({
    email: "",
    password: "",
  });

  if (!visible) return null;

  //-----------------------------------------------
  //Consumir API con AXIOS PARA INICIO DE SESION
  //-----------------------------------------------
  const url = "http://localhost:3000/auth/login";

  const handleInputChangeLogin = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    // console.log("Input changed:", name, value);
    setFormDataLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formDataLogin);
  };
  const handleLogin = async (
    event: React.ChangeEvent<HTMLInputElement> | null = null
  ) => {
    if (event) {
      event.preventDefault();
    }
    try {
      const response = await axios.post(url, formDataLogin); //petion post
      console.log("Response:", response.data);
      return response;
    } catch (error: any) {
      //asignación de message
      let errorMessage = " ";

      //verificación de status del message del error
      // console.log(error.response);
      if (error.response.data.message === "User is not approved.") {
        errorMessage =
          "Usuario no aprobado. Por favor, espera a que tu cuenta sea aprobada.";
      } else {
        //verificacion si es usuario ha sido approved
        errorMessage = "Credenciales inválidas. Por favor, verifica tus datos.";
      }

      Swal.fire({
        icon: "error",
        title: "Error de inicio de sesión",
        text: errorMessage,
      });
      // Restablecer las campos de inicio de sesión
      setFormDataLogin((prevData) => ({
        ...prevData,
        password: "",
      }));
    }
  };

  // Nueva función para abrir el modal de RegistroModal
  const handleToggleRegistro = () => {
    setRegistroVisible(!registroVisible);
  };
  //-----------------------------------------------

  //CERRAR MODAL
  const handleCloseModal = () => {
    onClose?.();
  };

  return (
    <>
      {activeContent === "login" && (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
          <div className="w-[400px] flex flex-col">
            <div className="relative">
              <div className="bg-white rounded-xl">
                <button
                  className="absolute top-0 right-0 text-black text-xl mr-4 mt-4 hover:text-white hover:bg-blue-300 rounded-full p-2"
                  onClick={handleCloseModal}
                >
                  X
                </button>
                <div className="bg-white p-8 rounded-md">
                  <h2 className="text-gray-500 text-2xl font-semibold mb-4 text-center">
                    Login
                  </h2>
                  <div className="flex flex-col items-center">
                    <div className="w-full mb-4">
                      <label htmlFor="email" className="text-md ml-2">
                        Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        className="px-4 py-2 w-full border rounded-lg"
                        placeholder="Usuario"
                        name="email"
                        value={formDataLogin.email}
                        onChange={handleInputChangeLogin}
                      />
                    </div>
                    <div className="w-full mb-4">
                      <label htmlFor="password" className="text-md ml-2">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="px-4 py-2 w-full border rounded-lg"
                        placeholder="Contraseña"
                        name="password"
                        value={formDataLogin.password}
                        onChange={handleInputChangeLogin}
                      />
                    </div>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 w-full rounded-lg"
                      onClick={() => handleLogin(null)}
                    >
                      Iniciar sesión
                    </button>
                    <span className="hover:text-blue-500 underline p-4 cursor-pointer">
                      Has olvidado tu contraseña?
                    </span>
                    <span className="px-8 text-center items-center text-gray-400">
                      No eres miembro todavía?
                      <p
                        className="text-blue-500 cursor-pointer hover:underline"
                        // onClick={() => setActiveContent("registre")} // Hacer clic en "Registrate" para mostrar el componente RegistroModal
                      >
                        Registrate
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeContent === "register" && (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
          <div className="w-[800px] flex flex-col">
            <div className="relative">
              <div className="bg-white rounded-xl ">
                <button
                  className="absolute top-0 right-0 text-black text-xl mr-4 mt-4 hover:text-white hover:bg-blue-300 rounded-full p-2"
                  // onClick={handleCloseModal}
                >
                  X
                </button>
                <div className="bg-white p-8 rounded-md">
                  <h2 className="text-gray-500 text-2xl font-semibold mb-4 text-center">
                    Registro
                  </h2>
                  <div className="flex flex-col items-center">
                    <div className="flex flex-wrap w-full">
                      <div className="w-full md:w-1/2 mb-4 md:pr-2">
                        <label htmlFor="email" className="text-md ml-2">
                          Email
                        </label>
                        <input
                          type="text"
                          id="email"
                          className="px-4 py-2 w-full border rounded-lg"
                          placeholder="Email"
                          // value={formDataRegistre.email}
                          // onChange={handleInputChangeRegistre}
                        />
                      </div>
                      <div className="w-full md:w-1/2 mb-4 md:pl-2">
                        <label htmlFor="password" className="text-md ml-2">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="px-4 py-2 w-full border rounded-lg"
                          placeholder="Contraseña"
                          // value={formDataRegistre.password}
                          // onChange={handleInputChangeRegistre}
                        />
                      </div>
                      <div className="w-full md:w-1/2 mb-4 md:pr-2">
                        <label htmlFor="userName" className="text-md ml-2">
                          UserName
                        </label>
                        <input
                          type="text"
                          id="userName"
                          className="px-4 py-2 w-full border rounded-lg"
                          placeholder="UserName"
                          // value={formDataRegistre.email}
                          // onChange={handleInputChangeRegistre}
                        />
                      </div>
                      <div className="w-full md:w-1/2 mb-4 md:pr-2">
                        <label htmlFor="nombre" className="text-md ml-2">
                          Nombre
                        </label>
                        <input
                          type="text"
                          id="nombre"
                          className="px-4 py-2 w-full border rounded-lg"
                          placeholder="Nombre"
                          // value={formDataRegistre.name}
                          // onChange={handleInputChangeRegistre}
                        />
                      </div>
                      <div className="w-full md:w-full mb-4 md:pr-2">
                        <label htmlFor="direccion" className="text-md ml-2">
                          Dirección
                        </label>
                        <input
                          type="text"
                          id="direccion"
                          className="px-4 py-2 w-full border rounded-lg"
                          placeholder="Dirección"
                          // value={formDataRegistre.address}
                          // onChange={handleInputChangeRegistre}
                        />
                      </div>
                      <div className="w-full md:w-1/2 mb-4 md:pr-2">
                        <label htmlFor="telefonoLocal" className="text-md ml-2">
                          Telefono Local
                        </label>
                        <input
                          type="text"
                          id="telefonoLocal"
                          className="px-4 py-2 w-full border rounded-lg"
                          placeholder="Telefono local"
                          // value={formDataRegistre.phone}
                          // onChange={handleInputChangeRegistre}
                        />
                      </div>
                      <div className="w-full md:w-1/2 mb-4 md:pr-2">
                        <label htmlFor="telefonoMovil" className="text-md ml-2">
                          Telefono Movil
                        </label>
                        <input
                          type="text"
                          id="telefonoMovil"
                          className="px-4 py-2 w-full border rounded-lg"
                          placeholder="Telefono Movil"
                          // value={formDataRegistre.mobile_phone}
                          // onChange={handleInputChangeRegistre}
                        />
                      </div>
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 w-full rounded-lg"
                        // onClick={() => handleLogin(null)}
                      >
                        Registrate
                      </button>
                    </div>
                    <div className="mt-2">
                      <span className="px-4 text-center items-center text-gray-400">
                        Si ya estas Registrado?
                        <p
                          className="text-blue-500 cursor-pointer hover:underline"
                          // onClick={() => setActiveContent("login")} // Hacer clic en "Registrate" para mostrar el componente RegistroModal
                        >
                          Login
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
