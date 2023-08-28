import { AuthInfo } from "../../types";

const STORAGE_KEY = "escribania_auth";

// Made this functions async just in case we need it in the future
export async function storeAuth({ user, token }: AuthInfo) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ user, token })); //Luego, convierte este objeto en una cadena JSON y lo almacena en el localStorage del navegador bajo la clave STORAGE_KEY. Básicamente, está almacenando la información de autenticación para que pueda ser recuperada más tarde, incluso si el usuario cierra la ventana del navegador.
}

export async function getAuth(): Promise<AuthInfo | null> {
  const authInfo = localStorage.getItem(STORAGE_KEY);

  if (authInfo === null) {
    return null;
  }

  return JSON.parse(authInfo);
}

export async function deleteAuth(): Promise<void> {
  localStorage.removeItem(STORAGE_KEY);
}
