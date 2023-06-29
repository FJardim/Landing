import Image from "next/image";
import React from "react";
import logo from "../../assets/image/EscribaniaD.png";
import portada from "../../assets/image/imgED.jpg";
import { Context } from "./Context";
import { NavBar } from "./navBar";

export const Header = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${portada.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "700px",
      }}
    >
      <NavBar />
      <Context />
    </div>
  );
};
