import React from "react";
import Pasos from "../components/Pasos";
import Cifras from "../components/Cifras";
import Servicios from "../components/Servicios";
import { PublContact } from "../components/PublContact";
import { Footer } from "../components/footer/Footer";
import { NavBar } from "../components/navBar/NavBar";

export default function Documents() {
  return (
    <div>
      <NavBar />
      <Pasos />
      <Cifras
        title={"¡TE AYUDAMOS A COMPLETAR TUS DOCUMENTOS!"}
        parraph={"Un equipo de abogados y juristas redactar los modelos "}
      />
      <Servicios title={"Nuestros Servicios"} />
      <PublContact />
      <Footer />
    </div>
  );
}
