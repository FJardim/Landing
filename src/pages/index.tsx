import { Inter } from "next/font/google";
import { Footer } from "../components/footer/Footer";
import { PublContact } from "../components/PublContact";
import Nosotros from "../components/body/Nosotros";
import Especialidades from "../components/body/Especialidades";
import Servicios from "../components/Servicios";
import MapContainer from "../components/Maps/MapContainer";
import Formulario from "../components/body/Contacto";
import { Header } from "../components/navBar/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="p-12 bg-slate-200">
      <section id="nosotros">
        <Nosotros
          title={"Acerca de Nosotros"}
          subtitle={"Fundada hace más de 40 años"}
          parraph={
            "Brindamos un asesoramiento notarial de forma integral, acompañando a nuestros clientes a lo largo de todo el proceso. El objetivo principal es ayudar tanto a empresas como a particulares, ofreciendo un servicio transparente, cercano, eficiente y rápido acorde a sus necesidades particulares."
          }
        />
        </section>
        <section id="especialidades">
        <Especialidades title={"Nuestras Especialidades"} />
      </section>
      </div>
      <div className=" bg-slate-200">
        <section id="servicios">
        <Servicios title={"Nuestros Servicios"} />
        </section>
        <MapContainer />
      </div>
      <div className="p-12">
        <section id="contacto">
        <Formulario title={"Dejanos tu mensaje"} />
        </section>
        
      </div>
      <PublContact />
      <Footer />
    </div>
  );
}
