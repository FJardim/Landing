import axios from "axios";
import React, { useState } from "react";

const LoginModalContent = ({ onRegisterPress }: { onRegisterPress: any }) => {
  const [registroVisible, setRegistroVisible] = useState(false); // Estado para controlar la visibilidad del componente Registro

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //Consumir API con AXIOS
  const url = "http://localhost:3000/auth/login";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (
    event: React.ChangeEvent<HTMLInputElement> | null = null
  ) => {
    if (event) {
      event.preventDefault();
    }
    try {
      const response = await axios.post(url, formData);
      console.log("Response:", response.data);
    } catch (error) {
      // Aquí puedes manejar los errores de la solicitud
      console.error("Error:", error);
    }
  };

  // Nueva función para abrir el modal de RegistroModal
  const handleToggleRegistro = () => {
    setRegistroVisible(!registroVisible);
  };
  // const handleCloseModal = () => {
  //   onclose?.();
  // };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[400px] flex flex-col">
          <div className="relative">
            <div className="bg-white rounded-xl">
              <button
                className="absolute top-0 right-0 text-black text-xl mr-4 mt-4 hover:text-white hover:bg-blue-300 rounded-full p-2"
                // onClick={handleCloseModal}
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
                      value={formData.email}
                      onChange={handleInputChange}
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
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 w-full rounded-lg"
                    onClick={() => handleLogin(null)} // Usar una función anónima para llamar a handleLogin
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
                      onClick={onRegisterPress} // Hacer clic en "Registrate" para mostrar el componente RegistroModal
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
    </>
  );
};

export default LoginModalContent;
