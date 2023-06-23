import { Inter } from "next/font/google";
import { NavBar } from "../components/navBar/NavBar";
import Nosotros from "../components/navBar/Nosotros";
import Especialidades from "../components/navBar/Especialidades";
import Servicios from "../components/Servicios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <NavBar />
      <Nosotros
  title={"Acerca de Nosotros"}
  subtitle={"Fundada hace más de 40 años"}
  parraph={"Brindamos un asesoramiento notarial de forma integral, acompañando a nuestros clientes a lo largo de todo el proceso. El objetivo principal es ayudar tanto a empresas como a particulares, ofreciendo un servicio transparente, cercano, eficiente y rápido acorde a sus necesidades particulares."}
/>
      <Especialidades title={"Nuestras Especialidades"}/>
      <Servicios/>
    </div>
  );
}
