import React, { useState } from "react";
import RegistroModal from "../auth/RegistroModal";

type ModalProps = {
  visible: boolean;
  onClose: () => void; // Agregamos la función onClose para cerrar el modal
};

export default function LoginModal({ visible, onClose }: ModalProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registroVisible, setRegistroVisible] = useState(false); // Estado para controlar la visibilidad del componente Registro

  if (!visible) return null;

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Aquí puedes realizar la lógica de inicio de sesión con los valores de username y password
    console.log("Username:", username);
    console.log("Password:", password);
  };
  const handleCloseModal = () => {
    onClose?.();
  };

  //   //Registro
  //   const handleOpenRegistro = () => {
  //     setRegistroVisible(true);
  //   };

  //   const handleCloseRegistro = () => {
  //     setRegistroVisible(false);
  //   };
  //   // Nueva función para cerrar el modal de LoginModal y abrir el modal de RegistroModal
  //   const handleToggleRegistro = () => {
  //     onClose?.(); // Cerrar el modal de LoginModal
  //     setRegistroVisible(!registroVisible);
  //   };

  return (
    <>
      {/* {registroVisible && <RegistroModal onClose={handleCloseRegistro} />} */}
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
                      value={username}
                      onChange={handleUsernameChange}
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
                      value={password}
                      onChange={handlePasswordChange}
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
                      //   onClick={handleToggleRegistro} // Hacer clic en "Registrate" para mostrar el componente RegistroModal
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
}
