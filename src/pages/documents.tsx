import React from "react";
import Pasos from "../components/Pasos";
import Cifras from "../components/Cifras";
import Servicios from "../components/Servicios";
import { PublContact } from "../components/PublContact";
import { Footer } from "../components/footer/Footer";
import { NavBar } from "../components/navBar/NavBar";
import portada from "../assets/image/portadaDos.jpg";

export default function Documents() {
  return (
    <div>
      <div
        className=""
        style={{
          backgroundImage: `url(${portada.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "130px",
        }}
      >
        <NavBar />
      </div>
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
