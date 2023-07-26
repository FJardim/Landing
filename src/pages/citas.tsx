import React from "react";
import { NavBar } from "../components/navBar/navBar";
import portada from "../assets/image/portadaDos.jpg";

export default function Citas() {
  return (
    <div className="bg-[#D9D9D9]">
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
      citas
    </div>
  );
}
