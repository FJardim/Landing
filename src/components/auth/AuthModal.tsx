import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useAuth } from "@/components/context/AuthContext";

type ModalProps = {
  visible: boolean;
  onClose: () => void; // Agregamos la función onClose para cerrar el modal
};

export default function AuthModal({ visible, onClose }: ModalProps) {
  const { login } = useAuth();
  const [activeContent, setActiveContent] = useState("login");
  const [registroVisible, setRegistroVisible] = useState(false); // Estado para controlar la visibilidad del componente Registro

  //API formdataLogin  para el inicio de sesion
  const [formDataLogin, setFormDataLogin] = useState({
    email: "",
    password: "",
  });

  //API fornDataRegistre para el registro de sesion
  const [formDataRegistre, setFormDataRegistre] = useState({
    email: "",
    password: "",
    userName: "",
    name: "",
    address: "",
    phone: "",
    mobile_phone: "",
    role: "usuario",
    status_approved: "0",
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
  const handleLogin = async () => {
    try {
      const { data } = await axios.post(url, formDataLogin); //petion post

      login({ user: data.user, token: data.access_token });

      onClose();
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

  //-----------------------------------------------
  //Consumir API con AXIOS PARA REGISTRE DE SESION
  //-----------------------------------------------
  const handleInputChangeregistre = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormDataRegistre((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // console.log(formDataRegistre);
  };
  const handleRegistration = async (
    event: React.ChangeEvent<HTMLInputElement> | null = null
  ) => {
    if (event) {
      event.preventDefault();
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/register",
        formDataRegistre
      );
      console.log("Response:", response.data);
      // Registro exitoso
      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "Tu cuenta ha sido registrada con éxito. Ahora tienes que esperar que el administrador apruebe tu registro para su inicio de sesión.",
      });

      // Cerrar el modal después de un registro exitoso
      return onClose?.();
    } catch (error: any) {
      let errormsg = " ";

      //verificar si el correo ya existe en la base de datos
      // console.log(error.response);

      if (error.response.data.message === "user alredy exists") {
        errormsg = "Usuario ya registrado.";
      }

      // Manejar errores en caso de falla en el registro
      Swal.fire({
        icon: "error",
        title: "Error de registro",
        text: "Cuenta ya registrada.",
      });

      // Restablecer las campos de inicio de sesión
      setFormDataRegistre((prevData) => ({
        ...prevData,
        email: "",
        password: "",
        userName: "",
        name: "",
        address: "",
        phone: "",
        mobile_phone: "",
      }));
    }
  };
  //-----------------------------------------------

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
                        Correo Electrónico
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
                        Contraseña
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="px-4 py-2 w-full border rounded-lg"
                        placeholder="********"
                        name="password"
                        value={formDataLogin.password}
                        onChange={handleInputChangeLogin}
                      />
                    </div>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 w-full rounded-lg"
                      onClick={handleLogin}
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
                        onClick={() => setActiveContent("registre")} // Hacer clic en "Registrate" para mostrar el componente RegistroModal
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

      {activeContent === "registre" && (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
          <div className="w-[800px] flex flex-col">
            <div className="relative">
              <div className="bg-white rounded-xl ">
                <button
                  className="absolute top-0 right-0 text-black text-xl mr-4 mt-4 hover:text-white hover:bg-blue-300 rounded-full p-2"
                  onClick={handleCloseModal}
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
                          Correo Electrónico
                        </label>
                        <input
                          type="text"
                          id="email"
                          className="px-4 py-2 w-full border rounded-lg"
                          placeholder="Usuario"
                          name="email"
                          value={formDataRegistre.email}
                          onChange={handleInputChangeregistre}
                        />
                      </div>
                      <div className="w-full md:w-1/2 mb-4 md:pl-2">
                        <label htmlFor="password" className="text-md ml-2">
                          Contraseña
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="px-4 py-2 w-full border rounded-lg"
                          placeholder="Contraseña"
                          name="password"
                          value={formDataRegistre.password}
                          onChange={handleInputChangeregistre}
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
                          name="userName"
                          value={formDataRegistre.userName}
                          onChange={handleInputChangeregistre}
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
                          name="name"
                          value={formDataRegistre.name}
                          onChange={handleInputChangeregistre}
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
                          name="address"
                          value={formDataRegistre.address}
                          onChange={handleInputChangeregistre}
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
                          placeholder="+xxxxxxxxxxxx"
                          name="phone"
                          value={formDataRegistre.phone}
                          onChange={handleInputChangeregistre}
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
                          placeholder="+xxxxxxxxxxxx"
                          name="mobile_phone"
                          value={formDataRegistre.mobile_phone}
                          onChange={handleInputChangeregistre}
                        />
                      </div>
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 w-full rounded-lg"
                        onClick={() => handleRegistration(null)}
                      >
                        Registrate
                      </button>
                    </div>
                    <div className="mt-2">
                      <span className="px-4 text-center items-center text-gray-400">
                        Si ya estas Registrado?
                        <p
                          className="text-blue-500 cursor-pointer hover:underline"
                          onClick={() => setActiveContent("login")} // Hacer clic en "Registrate" para mostrar el componente RegistroModal
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
