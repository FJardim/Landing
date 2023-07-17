import React, { useState, useEffect } from "react";
import Pasos from "../components/Pasos";
import Cifras from "../components/Cifras";
import Servicios from "../components/Servicios";
import { PublContact } from "../components/PublContact";
import { Footer } from "../components/footer/Footer";
import { NavBar } from "../components/navBar/navBar";
import portada from "../assets/image/portadaDos.jpg";
import Modal from "../pages/Modal";
import { useRouter } from "next/router";

export default function Documents() {
  const router = useRouter();

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(router.query.pay_completed === "true");
  }, [router.query.pay_completed]);

  // Función para cerrar el modal
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <div
        className=""
        style={{
          backgroundImage: `url(${portada.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <NavBar />
      </div>
      <Pasos />
      <div>
        <Cifras
          title={"¡TE AYUDAMOS A COMPLETAR TUS DOCUMENTOS!"}
          parraph={"Un equipo de abogados y juristas redactar los modelos "}
        />
      </div>

      <Modal visible={modalVisible} onClose={closeModal} />

      <Servicios title={"Nuestros Servicios"} />
      <PublContact />
      <Footer />
    </div>
  );
}
